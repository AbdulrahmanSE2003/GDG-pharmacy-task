// NOTE Imports
import { homePage } from "./route.js";
import { productsPage } from "./route.js";
import { cartPage } from "./route.js";
import { loginPage } from "./route.js";
import { products } from "./data.js";

// NOTE Constants
const rootDiv = document.querySelector("#root");

const pages = {
  home: homePage,
  products: productsPage,
  cart: cartPage,
  login: loginPage,
};

// NOTE Burger Menu Logic

const mobileBtn = document.getElementById("mobile-btn");
const navMenu = document.getElementById("nav-menu");

mobileBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// NOTE Handle Navbar Tabs
const navTabs = document.querySelectorAll(".nav-links li a");
//FIXME console.log(navTabs);
navTabs.forEach((navTab) =>
  // looping to add event listener
  navTab.addEventListener("click", (e) => {
    //FIXME console.log(e.currentTarget, "clicked");

    //  removing active class
    navTabs.forEach((tab) => tab.classList.remove("active"));

    // adding active class on clicked tab
    navTab.classList.add("active");

    // loading pages through navbar
    let pageName = pages[navTab.textContent];
    loadPage(pageName);
  }),
);

//  NOTE controlling page dynamically
function loadPage(page = homePage) {
  rootDiv.innerHTML = page;

  if (document.querySelector("#productsContainer")) {
    showProducts();
  }
}

// NOTE Load HomePage at first
loadPage();

//  NOTE Controlling clicks important clicks in site
rootDiv.addEventListener("click", (e) => {
  if (e.target.textContent.trim() === "Add to Cart") {
    const id = e.target.dataset.id;
    handleAddToCart(+id);
  }
  if (e.target.textContent.trim() === "Show Now")
    // Controlling shop now button
    loadPage(productsPage);
});

// NOTE showing products logic
function showProducts() {
  const productsDiv = document.querySelector("#productsContainer");
  productsDiv.innerHTML = "";

  products.map((product) => {
    const finalPrice =
      product.discount > 0
        ? (product.price - (product.price * product.discount) / 100).toFixed(2)
        : product.price.toFixed(2);

    productsDiv.innerHTML += `
    <div class="product-card transition  shadow-deep">
      <div class="img-wrapper">
        <img class="w-full transition" src="${product.image}" alt="${product.name}">
      </div>
      
      <div class="product-info flex flex-col gap-4">
      <p class="category">${product.category}</p>
        <h4 class="title">${product.name}</h4>
        
        <div class="flex justify-between items-center">
          <div class="product-price flex items-center gap-2">
          <span class="price">$${finalPrice} </span>
          ${product.discount > 0 ? `<span class="old text-muted">${product.price}</span>` : ""}
        </div>

        <button data-id="${product.id}" class="add-to-cart transition flex flex-center gap-2">Add to Cart
        <span><svg class="transition" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></span></button>
        </div>
      </div>
    </div>`;
  });
}

// NOTE control cart logic

// init at start
let cart = [];
localStorage.setItem("cart", cart);

// adding products to cart
function handleAddToCart(id) {
  const product = products.find((p) => p.id === id);

  // return if already exist
  if (cart.find((p) => p.id === id)) {
    showToast("Product Already Exist in Cart");
    return;
  }

  // adding product and save it to local storage
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Product Added to cart successfully!");
}

// NOTE Toast Notification
const toast = document.querySelector(".toast-msg");

let toastTimeout;

function showToast(message = "") {
  if (!message) return;

  clearTimeout(toastTimeout);

  toast.style.transition = "none";
  toast.classList.replace("down", "up");

  void toast.offsetWidth;

  toast.style.transition = "all 0.7s ease-in-out";
  toast.textContent = message;
  toast.classList.replace("up", "down");

  toastTimeout = setTimeout(() => {
    toast.classList.replace("down", "up");
  }, 3000);
}
