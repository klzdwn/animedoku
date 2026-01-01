export default async function handler(req, res) {
  try {
    const r = await fetch("https://api.sansekai.my.id/api/anime/latest");
    const data = await r.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "failed fetch latest" });
  }
}
