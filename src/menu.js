import acili from "./acili.jpg";
import cevizli from "./cevizli.jpg";
import findik from "./findik.jpg";
import isotlu from "./isotlu.jpg";
import lahmacun from "./lahmacun.jpg";
import vejetaryen from "./vejetaryen.jpg";

function createMenu(content) {
  let menu = document.createElement("div");
  menu.id = "menu";
  content.appendChild(menu);

  let card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.className = "lahmacun-photo";
  card.appendChild(img);

  let cardContent = document.createElement("div");
  cardContent.className = "card-content";
  card.appendChild(cardContent);

  let name = document.createElement("div");
  name.className="lahmacun-name";
  cardContent.appendChild(name);

  let price = document.createElement("div");
  cardContent.appendChild(price);

  let card2 = card.cloneNode(true);
  let card3 = card.cloneNode(true);
  let card4 = card.cloneNode(true);
  let card5 = card.cloneNode(true);
  let card6 = card.cloneNode(true);

  img.src = lahmacun;
  name.textContent = "Lahmacun";
  price.textContent = "8 TL";
  menu.appendChild(card);

  card2.querySelector("img").src = acili;
  menu.appendChild(card2);
  card2.querySelector(".lahmacun-name").textContent = "Hot Lahmacun";
  card2.lastElementChild.lastElementChild.textContent = "9 TL";

  card3.querySelector("img").src = findik;
  menu.appendChild(card3);
  card3.querySelector(".lahmacun-name").textContent = "Findik Lahmacun";
  card3.lastElementChild.lastElementChild.textContent = "6 TL";

  card4.querySelector("img").src = cevizli;
  menu.appendChild(card4);
  card4.querySelector(".lahmacun-name").textContent = "Walnut Lahmacun";
  card4.lastElementChild.lastElementChild.textContent = "12 TL";

  card5.querySelector("img").src = isotlu;
  menu.appendChild(card5);
  card5.querySelector(".lahmacun-name").textContent = "Lahmacun w/Isot";
  card5.lastElementChild.lastElementChild.textContent = "11 TL";

  card6.querySelector("img").src = vejetaryen;
  menu.appendChild(card6);
  card6.querySelector(".lahmacun-name").textContent = "Vegetarian Lahmacun";
  card6.lastElementChild.lastElementChild.textContent = "10 TL";
}

function deleteMenu(content) {
  let menu = document.getElementById("menu");
  content.removeChild(menu);
}

export { createMenu, deleteMenu };
