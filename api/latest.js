export default async function handler(req, res) {
  const r = await fetch("https://api.sansekai.my.id/api/anime/latest");
  const data = await r.json();
  res.status(200).json(data);
}
