
export default async function handler(req, res) {
  const { urlId } = req.query;

  if (!urlId) {
    return res.status(400).json({ error: "urlId required" });
  }

  try {
    const r = await fetch(
      "https://api.sansekai.my.id/api/anime/detail?urlId=" + urlId
    );
    const data = await r.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "failed fetch detail" });
  }
}
