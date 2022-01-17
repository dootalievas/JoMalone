import { data } from "./data.js";
const container = document.querySelector(".container");
const alldata = data();
const buttons = document.querySelectorAll(".btn");

const showProducts = (array) => {
  for (let el of array) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${el.image}" alt="" class="productImg" />
    <h3 class="name">${el.productName}</h3>
    <p class= "price">${el.price}</p>
    <p class ="size">${el.size}</p>
    <span class ="span">${el.sale === "bestseller" ? el.sale : ""}</span>
  `;
    div.className = "card";
    container.appendChild(div);

    // const img = document.createElement("img");
    // const productName = document.createElement("h3");
    // const price = document.createElement("p");
    // const size = document.createElement("p");

    // img.className = "productImg";
    // productName.className = "name";
    // price.className = "price";
    // size.className = "size";

    // price.innerHTML = el.price;
    // size.innerHTML = el.size;
    // productName.innerHTML = el.productName;
    // img.src = el.image;

    // div.appendChild(img);
    // div.appendChild(productName);
    // div.appendChild(price);
    // div.appendChild(size);

    // console.log(price, "the price");
    // console.log(productName, "the name");
    // console.log(img, "the images");
  }
};
showProducts(alldata);

const filterProducts = (arr, id) => {
  return arr.filter((obj) => obj.category === id || obj.sale === id);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dataId = e.target.getAttribute("data-id");
    if (dataId === "home essentials") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      console.log(filteredProducts);
    } else if (dataId === "cologne") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      console.log(filteredProducts);
    } else if (dataId === "bath and body") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      console.log(filteredProducts);
    } else if (dataId === "bestseller") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      console.log(filteredProducts);
    } else if (dataId === "all") {
      clearUi();
      showProducts(alldata);
    }
  });
});

///clean container function
const clearUi = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
// clearUi();
