const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  document.body.innerHTML = "ID tidak ditemukan";
}

fetch(`/api/detail?urlId=${id}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("judul").textContent = data.judul || "Tidak ada judul";
    document.getElementById("cover").src = data.cover || "";
    document.getElementById("sinopsis").textContent = data.sinopsis || "-";
  })
  .catch(err => {
    document.body.innerHTML = "Detail tidak tersedia 😭";
    console.error(err);
  });
