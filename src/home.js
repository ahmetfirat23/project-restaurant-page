import aliUsta from "./aliusta.jpg";

function createHome(content) {
  let home = document.createElement("div");
  home.id = "home";
  content.appendChild(home);

  let img = document.createElement("img");
  img.src = aliUsta;
  img.id = "ali-photo";
  img.alt = "Photo of Ali Usta";
  home.appendChild(img);

  let h1 = document.createElement("h1");
  h1.textContent = "Best lahmacuns in Adana";
  home.appendChild(h1);

  let i = document.createElement("i");
  i.textContent =
    "For 58 years this job, this corner! Lahmacun seller from dad to son.";
  home.appendChild(i);

  let div = document.createElement("div");
  div.textContent = "Visit us or order online!";
  home.appendChild(div);
}

function deleteHome(content) {
  let home = document.getElementById("home");
  content.removeChild(home);
}

export { createHome, deleteHome };
