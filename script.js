const API_URL = "https://animedoku.vercel.app/api/latest";

const listEl = document.getElementById("list");
const statusEl = document.getElementById("status");

fetch(API_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }
    return res.json();
  })
  .then(data => {
    console.log("API DATA:", data);

    if (!Array.isArray(data)) {
      statusEl.textContent = "Format data tidak valid 😭";
      return;
    }

    statusEl.textContent = "";
    listEl.innerHTML = "";

    data.forEach(anime => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
  <a href="detail.html?slug=${anime.slug}">
    <img src="${anime.cover}">
    <h3>${anime.judul}</h3>
  </a>
`;

      listEl.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    statusEl.textContent = "Gagal load data 😭";
  });
