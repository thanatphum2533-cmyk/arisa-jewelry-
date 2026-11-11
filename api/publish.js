// api/publish.js - Vercel Serverless Function (Supabase Real-time + GitHub Assets)
const REPO = 'thanatphum2533-cmyk/arisa-jewelry-';
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

async function githubPutFile(path, base64Content, message, token) {
  const url = `https://api.github.com/repos/${REPO}/contents/${path}`;
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'arisa-jewelry-cms',
    'Content-Type': 'application/json'
  };

  let sha = null;
  try {
    const getRes = await fetch(url, { headers });
    if (getRes.ok) {
      const existing = await getRes.json();
      sha = existing.sha;
    }
  } catch (e) {}

  const body = { message, content: base64Content };
  if (sha) body.sha = sha;

  const putRes = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body)
  });

  if (!putRes.ok) {
    const errText = await putRes.text();
    throw new Error(`GitHub API Error (${putRes.status}): ${errText}`);
  }
  return await putRes.json();
}

function utf8ToBase64(str) {
  return Buffer.from(str, 'utf8').toString('base64');
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-GitHub-Token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { products: rawProducts, images } = req.body || {};

    if (!Array.isArray(rawProducts)) {
      return res.status(400).json({ success: false, error: 'products array is required' });
    }

    const RAW_CDN_PREFIX = `https://raw.githubusercontent.com/${REPO}/main/`;
    const toCdn = (u) => (typeof u === 'string' && u.startsWith('assets/item-')) ? RAW_CDN_PREFIX + u : u;
    const products = rawProducts.map(p => ({
      ...p,
      image: toCdn(p.image),
      images: Array.isArray(p.images) ? p.images.map(toCdn) : (p.image ? [toCdn(p.image)] : [])
    }));

    // 1. Sync to Supabase in Real-time (if configured)
    let supabaseSuccess = false;
    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        const sbHeaders = {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        };

        const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
          method: 'POST',
          headers: sbHeaders,
          body: JSON.stringify(products)
        });

        if (sbRes.ok) {
          supabaseSuccess = true;
        }
      } catch (sbErr) {
        console.error('Supabase sync error:', sbErr);
      }
    }

    // 2. Upload any pending images to GitHub
    const token = process.env.GITHUB_TOKEN || req.headers['x-github-token'];
    const uploadedImages = [];

    if (token && images && typeof images === 'object') {
      const entries = Array.isArray(images)
        ? images
        : Object.entries(images).map(([p, data]) => ({
            path: p,
            base64: typeof data === 'string' ? data : data.base64
          }));

      for (const item of entries) {
        if (item.path && item.base64) {
          try {
            await githubPutFile(
              item.path,
              item.base64,
              `Upload image: ${item.path} via Admin Panel`,
              token
            );
            uploadedImages.push(item.path);
          } catch (imgErr) {
            console.error('Image upload error:', imgErr);
          }
        }
      }
    }

    // 3. Backup products.json to GitHub
    if (token) {
      try {
        const jsonStr = JSON.stringify(products, null, 2);
        const jsonBase64 = utf8ToBase64(jsonStr);
        await githubPutFile(
          'products.json',
          jsonBase64,
          `Update catalog (${products.length} items) via Admin Panel`,
          token
        );
      } catch (ghErr) {
        console.error('GitHub products.json backup error:', ghErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Published successfully',
      supabaseSynced: supabaseSuccess,
      itemCount: products.length,
      uploadedImages
    });
  } catch (err) {
    console.error('Publish error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal Server Error'
    });
  }
};

module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};
