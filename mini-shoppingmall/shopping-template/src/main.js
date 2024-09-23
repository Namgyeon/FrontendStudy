const blueBtn = document.querySelector("#blueBtn");
const yellowBtn = document.querySelector("#yellowBtn");
const pinkBtn = document.querySelector("#pinkBtn");

const tshirtBtn = document.querySelector("#tshirtBtn");
const pantsBtn = document.querySelector("#pantsBtn");
const skirtBtn = document.querySelector("#skirtBtn");

blueBtn.addEventListener("click", () => {
  const itemlist = document.querySelectorAll(".item");

  itemlist.forEach((item) => {
    if (item.dataset.color === "blue") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

yellowBtn.addEventListener("click", () => {
  const itemlist = document.querySelectorAll(".item");

  itemlist.forEach((item) => {
    if (item.dataset.color === "yellow") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

pinkBtn.addEventListener("click", () => {
  const itemlist = document.querySelectorAll(".item");

  itemlist.forEach((item) => {
    if (item.dataset.color === "pink") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

tshirtBtn.addEventListener("click", () => {
  const itemlist = document.querySelectorAll(".item");

  itemlist.forEach((item) => {
    if (item.dataset.type === "tshirt") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

pantsBtn.addEventListener("click", () => {
  const itemlist = document.querySelectorAll(".item");

  itemlist.forEach((item) => {
    if (item.dataset.type === "pants") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

skirtBtn.addEventListener("click", () => {
  const itemlist = document.querySelectorAll(".item");

  itemlist.forEach((item) => {
    if (item.dataset.type === "skirt") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item));
}

function createHTMLString(item) {
  return `
  <li class="item" data-color="${item.color}" data-type=${item.type}>
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">          
    <span class="item__description">${item.gender}, ${item.size}, ${item.color}</span>
  </li>
  `;
}

loadItems().then((items) => {
  console.log(items);
  displayItems(items);
});

items.appendChild;
