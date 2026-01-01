
const API = "https://animedoku.vercel.app/api/latest";

const status = document.getElementById("status");
const list = document.getElementById("list");

fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log("API DATA:", data);

    if (!Array.isArray(data)) {
      status.textContent = "Data API bukan array";
      return;
    }

    status.textContent = "";

    data.forEach(anime => {
      const div = document.createElement("div");
      div.textContent = anime.judul;
      list.appendChild(div);
    });
  })
  .catch(err => {
    console.error(err);
    status.textContent = "Gagal load data 😭";
  });
