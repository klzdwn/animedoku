export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: "url required" });

  try {
    const r = await fetch(
      `https://api.sansekai.my.id/api/anime/getvideo?url=${encodeURIComponent(url)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "video failed" });
  }
}
