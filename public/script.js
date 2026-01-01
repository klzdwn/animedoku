const list = document.getElementById("anime-list");

fetch("/api/latest")
  .then(res => res.json())
  .then(data => {
    list.innerHTML = "";

    data.forEach(anime => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <a href="detail.html?id=${anime.id}">
          <img src="${anime.cover}" alt="${anime.judul}">
          <h3>${anime.judul}</h3>
        </a>
      `;

      list.appendChild(card);
    });
  })
  .catch(err => {
    list.innerHTML = "Gagal load data 😭";
    console.error(err);
  });
