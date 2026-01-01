
<script>
fetch("https://animedoku.vercel.app/api/latest")
  .then(res => res.json())
  .then(json => {
    const list = document.getElementById("list");

    // DEBUG: pastiin datanya kebaca
    console.log(json);

    // KARENA API NGEBALIKIN ARRAY LANGSUNG
    const data = Array.isArray(json) ? json : json.data;

    data.forEach(anime => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${anime.cover}" />
        <h3>${anime.judul}</h3>
      `;

      list.appendChild(card);
    });
  })
  .catch(err => {
    document.body.innerHTML = "Frontend error 😭<br>" + err;
    console.error(err);
  });
</script>
