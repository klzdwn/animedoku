const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container = document.getElementById("detail");

if (!id) {
  container.innerHTML = "ID tidak ditemukan";
} else {
  fetch(`/api/detail?urlId=${id}`)
    .then(r => r.json())
    .then(res => {
      const anime = res.data;
      if (!anime) {
        container.innerHTML = "Detail tidak tersedia";
        return;
      }

      container.innerHTML = `
        <h2>${anime.title}</h2>
        <img src="${anime.cover}" width="200"/>
        <p>${anime.synopsis || "-"}</p>

        <h3>Episode</h3>
        <ul>
          ${anime.episodes.map(ep => `
            <li>
              <a href="${ep.url}" target="_blank">
                ${ep.title}
              </a>
            </li>
          `).join("")}
        </ul>
      `;
    })
    .catch(() => {
      container.innerHTML = "Gagal load detail 😭";
    });
}
