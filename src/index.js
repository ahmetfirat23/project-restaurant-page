import "./style.css";
import { createHome, deleteHome } from "./home.js";
import { createMenu, deleteMenu } from "./menu.js";
import { createContact, deleteContact } from "./contact.js";
const body = document.querySelector("body");
const content = document.createElement("div");
let navBar = document.createElement("div");
let currentPage = "home";
let homeBtn = document.createElement("a");
let menuBtn = document.createElement("a");
let contactBtn = document.createElement("a");

let pageCommands = {
  home: { create: createHome, delete: deleteHome, button: homeBtn },
  menu: { create: createMenu, delete: deleteMenu, button: menuBtn },
  contact: { create: createContact, delete: deleteContact, button: contactBtn },
};

function changeSelectedBtn(newBtn) {
  pageCommands[currentPage].button.classList.remove("btn-selected");
  newBtn.classList.add("btn-selected");
}

content.id = "content";
body.appendChild(content);

navBar.id = "nav-bar";
content.appendChild(navBar);

pageCommands[currentPage].create(content);

homeBtn.id = "home-btn";
homeBtn.classList = "btn btn-selected";
homeBtn.textContent = "Home";
homeBtn.addEventListener("click", () => {
  if (currentPage != "home") {
    pageCommands[currentPage].delete(content);
    createHome(content);
    changeSelectedBtn(homeBtn);
    currentPage = "home";
  }
});
navBar.appendChild(homeBtn);

menuBtn.id = "menu-btn";
menuBtn.classList = "btn";
menuBtn.textContent = "Menu";
menuBtn.addEventListener("click", () => {
  if (currentPage != "menu") {
    pageCommands[currentPage].delete(content);
    createMenu(content);
    changeSelectedBtn(menuBtn);
    currentPage = "menu";
  }
});
navBar.appendChild(menuBtn);

contactBtn.id = "contact-btn";
contactBtn.classList = "btn";
contactBtn.textContent = "Contact";
contactBtn.addEventListener("click", () => {
  if (currentPage != "contact") {
    pageCommands[currentPage].delete(content);
    createContact(content);
    changeSelectedBtn(contactBtn);
    currentPage = "contact";
  }
});
navBar.appendChild(contactBtn);
