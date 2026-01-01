
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

if (!slug) {
  document.body.innerHTML = "Slug tidak ditemukan";
  throw new Error("no slug");
}

fetch(`https://animedoku.vercel.app/api/detail?slug=${slug}`)
  .then(res => res.json())
  .then(json => {
    const data = json.data;
    if (!data) {
      document.body.innerHTML = "Detail tidak tersedia";
      return;
    }

    document.getElementById("title").textContent = data.judul;
    document.getElementById("sinopsis").textContent =
      data.sinopsis || "Tidak ada sinopsis";
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML = "Gagal load detail 😭";
  });
