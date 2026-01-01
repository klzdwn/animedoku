const params = new URLSearchParams(window.location.search);
const url = params.get("url");

if (!url) {
  document.body.innerHTML = "URL anime tidak ditemukan";
  throw new Error("no url");
}

fetch("https://api.sansekai.my.id/api/anime/detail?url=" + encodeURIComponent(url))
  .then(res => res.json())
  .then(json => {
    const data = json.data || json;

    document.getElementById("title").textContent = data.judul;
    document.getElementById("cover").src = data.cover;
    document.getElementById("sinopsis").textContent =
      data.sinopsis || "Tidak ada sinopsis";

    const ul = document.getElementById("episodes");
    ul.innerHTML = "";

    if (!Array.isArray(data.episode)) {
      ul.innerHTML = "<li>Episode tidak tersedia</li>";
      return;
    }

    data.episode.forEach(ep => {
      const li = document.createElement("li");
      li.textContent = ep.judul;
      ul.appendChild(li);
    });
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML = "Gagal load detail 😭";
  });
