const list = document.getElementById("anime-list");

fetch("/api/latest")
  .then(res => res.json())
  .then(data => {
    list.innerHTML = "";

    data.forEach(anime => {
      const a = document.createElement("a");
      a.href = `detail.html?id=${anime.id}`;
      a.textContent = anime.judul;
      a.style.display = "block";
      a.style.color = "#fff";
      a.style.marginBottom = "8px";
      list.appendChild(a);
    });
  })
  .catch(err => {
    list.innerHTML = "Gagal load data 😭";
    console.error(err);
  });
