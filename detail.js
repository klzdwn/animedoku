
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

if (!slug) {
  document.body.innerHTML = "Slug tidak ditemukan 😭";
  throw new Error("no slug");
}

fetch("https://animedoku.vercel.app/api/detail?slug=" + slug)
  .then(res => res.json())
  .then(json => {
    const data = json.data;

    if (!data) {
      document.body.innerHTML = "Detail tidak tersedia 😭";
      return;
    }

    document.getElementById("title").textContent = data.judul;
    document.getElementById("cover").src = data.cover;
    document.getElementById("sinopsis").textContent =
      data.sinopsis || "";

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
