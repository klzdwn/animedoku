const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const API = "https://animedoku.vercel.app/api/detail?slug=" + slug;

fetch(API)
  .then(r => r.json())
  .then(data => {
    document.getElementById("title").textContent = data.judul;
    document.getElementById("cover").src = data.cover;
    document.getElementById("sinopsis").textContent = data.sinopsis;

    const list = document.getElementById("episode-list");

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
  .catch(() => {
    document.body.innerHTML = "Gagal load detail 😭";
  });
