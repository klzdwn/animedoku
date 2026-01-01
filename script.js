const API_URL = "https://animedoku.vercel.app/api/latest";

fetch(API_URL)
  .then(res => {
    if (!res.ok) throw new Error("API error " + res.status);
    return res.json();
  })
  .then(data => {
    if (!Array.isArray(data)) {
      document.getElementById("status").textContent =
        "Data bukan array. Cek API.";
      return;
    }

    document.getElementById("status").textContent = "";
    const list = document.getElementById("list");

    data.forEach(anime => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${anime.cover}">
        <h3>${anime.judul}</h3>
      `;
      list.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("status").textContent =
      "JS / Path error: " + err.message;
    console.error(err);
  });
