
const API = "https://animedoku.vercel.app/api/latest";

const list = document.getElementById("list");
const status = document.getElementById("status");

fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    if (!Array.isArray(data)) {
      status.textContent = "Data API tidak valid";
      return;
    }

    status.textContent = "";

    data.forEach(anime => {
      // PAKAI url APA ADANYA (YANG ADA DI DATA)
      const link = anime.url || anime.endpoint || anime.link;

      if (!link) return;

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <a href="detail.html?url=${encodeURIComponent(link)}">
          <img src="${anime.cover}">
          <h3>${anime.judul}</h3>
        </a>
      `;

      list.appendChild(div);
    });
  })
  .catch(err => {
    console.error(err);
    status.textContent = "Gagal load data 😭";
  });
