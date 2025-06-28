const katalog = [
  { title: "Chibi Style", img: "img/chibi.jpg", price: "Rp50.000" },
  { title: "Anime Style", img: "img/anime.jpg", price: "Rp100.000" },
  { title: "Semi-Realistic", img: "img/semi.jpg", price: "Rp150.000" }
];

function renderKatalog() {
  const container = document.getElementById("katalog");
  katalog.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.price}</p>
    `;
    container.appendChild(card);
  });
}

window.addEventListener("load", renderKatalog);
