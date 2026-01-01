export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://api.sansekai.my.id/api/anime/latest",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "latest failed" });
  }
}
