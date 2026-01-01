export default async function handler(req, res) {
  const { urlId } = req.query;

  if (!urlId) {
    return res.status(400).json({ error: "urlId dibutuhkan" });
  }

  const r = await fetch(
    `https://api.sansekai.my.id/api/anime/detail?urlId=${urlId}`
  );
  const data = await r.json();

  res.status(200).json(data);
}
