
const API = "https://animedoku.vercel.app/api/latest";

const status = document.getElementById("status");
const list = document.getElementById("list");

fetch(API)
  .then(res => res.json())
  .then(data => {
    if (!Array.isArray(data)) {
      status.textContent = "Data API tidak valid";
      return;
    }

    status.textContent = "";
    list.innerHTML = "";

    data.forEach(anime => {
      if (!anime.slug) return;

      const a = document.createElement("a");
      a.href = `detail.html?slug=${anime.slug}`;
      a.textContent = anime.judul;
      a.style.display = "block";
      a.style.padding = "6px 0";
      a.style.color = "white";
      a.style.textDecoration = "none";

      list.appendChild(a);
    });
  })
  .catch(err => {
    console.error(err);
    status.textContent = "Gagal load data 😭";
  });
