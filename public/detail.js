const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  document.getElementById("title").innerText = "ID tidak ditemukan";
  throw new Error("ID kosong");
}

fetch(`/api/detail?urlId=${id}`)
  .then(res => res.json())
  .then(res => {
    // 🔥 NORMALISASI DATA
    const data = res.data || res;

    document.getElementById("title").innerText =
      data.judul ?? "Tidak ada judul";

    if (data.cover) {
      document.getElementById("cover").src = data.cover;
    }

    document.getElementById("sinopsis").innerText =
      data.sinopsis ?? "Tidak ada sinopsis";

    const list = document.getElementById("episode-list");
    list.innerHTML = "";

    const episodes =
      data.episode?.list ||
      data.episode ||
      [];

    if (Array.isArray(episodes) && episodes.length > 0) {
      episodes.forEach(ep => {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${ep.url}" target="_blank" style="color:#93c5fd">
            ${ep.judul || "Episode"}
          </a>
        `;
        list.appendChild(li);
      });
    } else {
      list.innerHTML = "<li>Tidak ada episode</li>";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("title").innerText = "Gagal load detail";
  });
