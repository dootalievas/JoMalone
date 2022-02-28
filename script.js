import { data } from "./data.js";
const container = document.querySelector(".container");
const alldata = data();
const buttons = document.querySelectorAll(".btn");
const categoryName = document.querySelector(".categoryName");
const categoryText = document.querySelector(".categoryText");
const cartItemsEl = document.querySelector(".cart-content");
const subTotalEl = document.querySelector(".subtotal");

const showProducts = (alldata) => {
  categoryName.textContent = "All Products";
  categoryText.textContent =
    "Discover our new arrivals, collection highlights, the scents we love and more from the House of Jo Malone London.";
  for (let el of alldata) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${el.image}" alt="" class="productImg" />
    <span class ="span">${el.sale === "bestseller" ? " BESTSELLER " : ""}</span>
    <h3 class="name">${el.productName}</h3>
    <p class= "price">$ ${el.price}</p>
    <p class ="size">${el.size}</p>
    <button class='addToCart' data-id=${
      el.id
    }> <i class="fas fa-cart-plus"></i>Add to Cart</button>
  `;
    div.className = "card";
    container.appendChild(div);
  }
};
showProducts(alldata);

///local storage name+price

///////filtering products
const filterProducts = (arr, id) => {
  return arr.filter((obj) => obj.category === id || obj.sale === id);
};

const clickCategory = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      buttons.forEach((button) => button.classList.remove("active"));
      this.classList.add("active");
      const dataId = e.target.getAttribute("data-id");
      if (dataId === "home essentials") {
        clearUi();
        const filteredProducts = filterProducts(alldata, dataId);
        console.log(filterProducts, "filtered");
        showProducts(filteredProducts);
        categoryName.textContent = "Home Essentials";
        categoryText.textContent =
          "Create scented stories tailored to any and every space. Fragrances that set the mood and inspire scented memories. Let our house inspire your home.";
      } else if (dataId === "cologne") {
        clearUi();
        const filteredProducts = filterProducts(alldata, dataId);
        showProducts(filteredProducts);
        categoryName.textContent = "Colognes";
        categoryText.textContent = `Each of our simple, elegant Colognes is crafted from fine ingredients and designed to be layered with another on the skin to create something truly personal to you.`;
      } else if (dataId === "bath and body") {
        clearUi();
        const filteredProducts = filterProducts(alldata, dataId);
        showProducts(filteredProducts);
        categoryName.textContent = "Bath and Body";
        categoryText.textContent = `Create a new morning ritual, a night of pampering or a moment of escape. From uplifting Body & Hand Wash, to sumptuous Bath Oil, all steeped in a selection of our most delicious scents.`;
      } else if (dataId === "bestseller") {
        clearUi();
        const filteredProducts = filterProducts(alldata, dataId);
        showProducts(filteredProducts);
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
};
clickCategory();
//selecting the buttons
const addToCartbtns = document.querySelectorAll(".addToCart");
//add to cart arr
let cart = [];
const addToCart = () => {
  addToCartbtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      const id = +e.target.getAttribute("data-id");
      console.log(id);
      const item = alldata.find((el) => el.id === id);
      cart.push(item);
      updateCart();
      console.log(cart);
    })
  );
};
addToCart();
///updating the cart

///calculate subtotal
function renderCartSubtotal() {
  let totalProducts = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalProducts++;
    totalPrice = totalPrice + +item.price;
  });
  subTotalEl.innerHTML = `Subtotal(${totalProducts} items): $ ${totalPrice}`;
}

//renderCartItems function

function renderCartItems() {
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3 class="nameOfProduct">${item.productName}</h3>
    <img src="${item.image}" style="width:10%"alt="imageOfProduct" />
    <p class="priceOfProduct">Price:$ ${item.price}</p>
    `;
    div.className = "cart-card";
    cartItemsEl.appendChild(div);
  });
}
function updateCart() {
  renderCartItems();
  renderCartSubtotal();
}
///clean container function
const clearUi = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
// clearUi();
