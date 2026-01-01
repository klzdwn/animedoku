const params = new URLSearchParams(window.location.search);
const url = params.get("url");

fetch("https://animedoku.vercel.app/api/video?url=" + encodeURIComponent(url))
  .then(r => r.json())
  .then(data => {
    document.getElementById("player").src = data.video;
  })
  .catch(() => {
    document.body.innerHTML = "Video gagal dimuat 😭";
  });
