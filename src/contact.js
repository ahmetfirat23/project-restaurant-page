function createContact(content) {
  let contact = document.createElement("div");
  contact.id = "contact";
  content.appendChild(contact);

  let h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  contact.appendChild(h1);

  let contactContent = document.createElement("div");
  contactContent.id = "contact-content";
  contact.appendChild(contactContent);

  let contactDiv1 = document.createElement("div");
  let span1_1 = document.createElement("span");
  span1_1.className = "contact-label";
  span1_1.textContent = "Address:";
  contactDiv1.appendChild(span1_1);
  let span1_2 = document.createElement("span");
  span1_2.textContent = " Karasoku, 28002. Sk. No:1, 01010 Seyhan/Adana";
  contactDiv1.appendChild(span1_2);
  contactContent.appendChild(contactDiv1);

  let contactDiv2 = document.createElement("div");
  let span2_1 = document.createElement("span");
  span2_1.className = "contact-label";
  span2_1.textContent = "Tel no:";
  contactDiv2.appendChild(span2_1);
  let span2_2 = document.createElement("span");
  span2_2.textContent = " 0535-ALI-USTA";
  contactDiv2.appendChild(span2_2);
  contactContent.appendChild(contactDiv2);

  let map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12747.954787972729!2d35.326744!3d36.986203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x669932ca75891d0f!2sAli%20Usta%20Tablada%20Lahmacun!5e0!3m2!1str!2str!4v1629477324345!5m2!1str!2str";
  map.width = "450";
  map.height = "450";
  map.style = "border: 0";
  map.allowFullscreen = "";
  map.loading = "lazy";
  contact.appendChild(map);
}

function deleteContact(content) {
  let contact = document.getElementById("contact");
  content.removeChild(contact);
}

export { createContact, deleteContact };
