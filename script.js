const API = "https://api.sansekai.my.id/api/anime/latest";

const status = document.getElementById("status");
const list = document.getElementById("list");

fetch(API)
  .then(res => res.json())
  .then(json => {
    // beberapa endpoint pakai { data: [] }
    const data = json.data || json;

    if (!Array.isArray(data)) {
      status.textContent = "Data API tidak valid";
      return;
    }

    status.textContent = "";
    list.innerHTML = "";

    data.forEach(anime => {
      if (!anime.url || !anime.judul) return;

      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = `
        <a href="detail.html?url=${encodeURIComponent(anime.url)}">
          ${anime.judul}
        </a>
      `;

      list.appendChild(div);
    });
  })
  .catch(err => {
    console.error(err);
    status.textContent = "Gagal load data 😭";
  });
