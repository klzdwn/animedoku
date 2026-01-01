
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

if (!slug) {
  document.body.innerHTML = "Slug tidak ditemukan 😭";
}

fetch("https://animedoku.vercel.app/api/detail?slug=" + slug)
  .then(res => res.json())
  .then(json => {
    console.log("DETAIL API:", json);

    // AMBIL DATA YANG BENAR
    const data = json.data || json;

    if (!data || !data.judul) {
      document.body.innerHTML = "Data detail kosong 😭";
      return;
    }

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
