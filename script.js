import { data } from "./data.js";
const container = document.querySelector(".container");
const alldata = data();
const buttons = document.querySelectorAll(".btn");
const categoryName = document.querySelector(".categoryName");
const categoryText = document.querySelector(".categoryText");
const addToCartbtns = document.querySelectorAll(".addToCart");

const showProducts = (array) => {
  categoryName.textContent = "All Products";
  categoryText.textContent =
    "Discover our new arrivals, collection highlights, the scents we love and more from the House of Jo Malone London.";
  for (let el of array) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${el.image}" alt="" class="productImg" />
    <span class ="span">${el.sale === "bestseller" ? " BESTSELLER " : ""}</span>
    <h3 class="name">${el.productName}</h3>
    <p class= "price">${el.price}</p>
    <p class ="size">${el.size}</p>
    <button class='addToCart'> Add to Cart</button>
    
  `;
    div.className = "card";
    container.appendChild(div);
  }
};
showProducts(alldata);

const filterProducts = (arr, id) => {
  return arr.filter((obj) => obj.category === id || obj.sale === id);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    buttons.forEach((button) => button.classList.remove("active"));
    this.classList.add("active");
    const dataId = e.target.getAttribute("data-id");
    if (dataId === "home essentials") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      categoryName.textContent = "Home Essentials";
      categoryText.textContent =
        "Create scented stories tailored to any and every space. Fragrances that set the mood and inspire scented memories. Let our house inspire your home.";
      console.log(filteredProducts);
    } else if (dataId === "cologne") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      categoryName.textContent = "Colognes";
      categoryText.textContent = `Each of our simple, elegant Colognes is crafted from fine ingredients and designed to be layered with another on the skin to create something truly personal to you.`;
      console.log(filteredProducts);
    } else if (dataId === "bath and body") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      categoryName.textContent = "Bath and Body";
      categoryText.textContent = `Create a new morning ritual, a night of pampering or a moment of escape. From uplifting Body & Hand Wash, to sumptuous Bath Oil, all steeped in a selection of our most delicious scents.`;

      console.log(filteredProducts);
    } else if (dataId === "bestseller") {
      clearUi();
      const filteredProducts = filterProducts(alldata, dataId);
      showProducts(filteredProducts);
      console.log(filteredProducts);
      categoryName.textContent = "Bestellers";
      categoryText.textContent =
        "Explore a selection of our most-loved scents. Discover the perfect first fragrance, or a new addition to your Jo Malone London collection.";
    } else if (dataId === "all") {
      clearUi();
      showProducts(alldata);
      categoryName.textContent = "All Products";
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
