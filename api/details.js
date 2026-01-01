export default async function handler(req, res) {
  const slug = req.query.slug;
  if (!slug) return res.status(400).json({ error: "slug required" });

  try {
    const r = await fetch(
      `https://api.sansekai.my.id/api/anime/detail?slug=${slug}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "detail failed" });
  }
}
