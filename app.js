const katalog = [
  { title: "Half Body", img: "images/Tar-21.png", price: "$50" },
  { title: "Full Body", img: "images/Naranthe.png", price: "$100" },
  { title: "Full Illustration", img: "images/birthday.png", price: "$200" }
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
