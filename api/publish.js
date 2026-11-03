// api/publish.js - Vercel Serverless Function
const REPO = 'thanatphum2533-cmyk/arisa-jewelry-';

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
  } catch (e) {
    // New file, no SHA
  }

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
    const token = process.env.GITHUB_TOKEN || req.headers['x-github-token'];
    if (!token) {
      return res.status(500).json({
        success: false,
        error: 'GITHUB_TOKEN is not configured in Vercel environment variables.'
      });
    }

    const { products, images } = req.body || {};

    if (!Array.isArray(products)) {
      return res.status(400).json({ success: false, error: 'products array is required' });
    }

    // 1. Upload any pending images
    const uploadedImages = [];
    if (images && typeof images === 'object') {
      const entries = Array.isArray(images)
        ? images
        : Object.entries(images).map(([p, data]) => ({
            path: p,
            base64: typeof data === 'string' ? data : data.base64
          }));

      for (const item of entries) {
        if (item.path && item.base64) {
          await githubPutFile(
            item.path,
            item.base64,
            `Upload image: ${item.path} via Admin Panel`,
            token
          );
          uploadedImages.push(item.path);
        }
      }
    }

    // 2. Upload updated products.json
    const jsonStr = JSON.stringify(products, null, 2);
    const jsonBase64 = utf8ToBase64(jsonStr);
    await githubPutFile(
      'products.json',
      jsonBase64,
      `Update catalog (${products.length} items) via Admin Panel`,
      token
    );

    return res.status(200).json({
      success: true,
      message: 'Published successfully',
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
