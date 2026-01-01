const API = "https://api.sansekai.my.id/api/anime/latest";

const status = document.getElementById("status");
const list = document.getElementById("list");

fetch(API)
  .then(res => res.json())
  .then(json => {
    const data = json.data || json; // jaga-jaga

    if (!Array.isArray(data)) {
      status.textContent = "Data API tidak valid";
      return;
    }

    status.textContent = "";
    list.innerHTML = "";

    data.forEach(anime => {
      if (!anime.url) return;

      const a = document.createElement("a");
      a.href = `detail.html?url=${encodeURIComponent(anime.url)}`;
      a.textContent = anime.judul;
      a.style.display = "block";
      a.style.color = "white";
      a.style.padding = "6px 0";
      a.style.textDecoration = "none";

      list.appendChild(a);
    });
  })
  .catch(err => {
    console.error(err);
    status.textContent = "Gagal load data 😭";
  });
