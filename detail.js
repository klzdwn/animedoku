
const params = new URLSearchParams(window.location.search);
const url = params.get("url");

if (!url) {
  document.body.innerHTML = "URL anime tidak ditemukan 😭";
  throw new Error("no url");
}

fetch("https://animedoku.vercel.app/api/detail?url=" + encodeURIComponent(url))
  .then(res => res.json())
  .then(json => {
    console.log("DETAIL:", json);

    const data = json.data || json;

    document.getElementById("title").textContent = data.judul;
    document.getElementById("cover").src = data.cover;
    document.getElementById("sinopsis").textContent =
      data.sinopsis || "Tidak ada sinopsis.";

    const list = document.getElementById("episode-list");
    list.innerHTML = "";

    if (!Array.isArray(data.episode)) {
      list.innerHTML = "<li>Episode tidak tersedia</li>";
      return;
    }

    data.episode.forEach(ep => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="watch.html?url=${encodeURIComponent(ep.url)}">
          ▶ ${ep.judul}
        </a>
      `;
      list.appendChild(li);
    });
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML = "Gagal load detail 😭";
  });
