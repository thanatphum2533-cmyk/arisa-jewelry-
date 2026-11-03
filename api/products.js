// api/products.js - Real-time products endpoint (Supabase + GitHub Fallback)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const REPO = 'thanatphum2533-cmyk/arisa-jewelry-';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. Try fetching real-time from Supabase
  if (SUPABASE_URL && SUPABASE_KEY) {
    try {
      const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=created_at.desc`, {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`
        }
      });

      if (sbRes.ok) {
        const data = await sbRes.json();
        if (Array.isArray(data) && data.length > 0) {
          return res.status(200).json(data);
        }
      }
    } catch (sbErr) {
      console.error('Supabase fetch error, trying GitHub fallback:', sbErr);
    }
  }

  // 2. Fallback to GitHub API
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers = {
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'arisa-jewelry-cms'
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const ghRes = await fetch(`https://api.github.com/repos/${REPO}/contents/products.json?ref=main&t=${Date.now()}`, {
      headers
    });

    if (ghRes.ok) {
      const data = await ghRes.json();
      const content = Buffer.from(data.content, 'base64').toString('utf8');
      const products = JSON.parse(content);
      return res.status(200).json(products);
    }
  } catch (ghErr) {
    console.error('GitHub fetch error, trying local file fallback:', ghErr);
  }

  // 3. Fallback to local file in runtime
  try {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(process.cwd(), 'products.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return res.status(200).json(JSON.parse(content));
    }
  } catch (err) {}

  return res.status(500).json({ error: 'Unable to load products' });
};
