const list = document.getElementById("list");

fetch("https://api.sansekai.my.id/api/anime/latest")
  .then(r => r.json())
  .then(data => {
    list.innerHTML = "";
    data.data.forEach(anime => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="detail.html?id=${anime.id}">
          ${anime.title}
        </a>
      `;
      list.appendChild(li);
    });
  })
  .catch(() => {
    list.innerHTML = "Gagal load data 😭";
  });
