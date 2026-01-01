export default async function handler(req, res) {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "q required" });

  try {
    const r = await fetch(
      `https://api.sansekai.my.id/api/anime/search?q=${encodeURIComponent(q)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "search failed" });
  }
}
