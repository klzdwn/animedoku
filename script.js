
const API = "https://animedoku.vercel.app/api/latest";

const list = document.getElementById("list");
const status = document.getElementById("status");

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

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <a href="detail.html?slug=${anime.slug}">
          <img src="${anime.cover}">
          <h3>${anime.judul}</h3>
        </a>
      `;

      list.appendChild(div);
    });
  })
  .catch(() => {
    status.textContent = "Gagal load data 😭";
  });
