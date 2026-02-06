import { homePage } from "./route.js";
import { productsPage } from "./route.js";
import { cartPage } from "./route.js";
import { loginPage } from "./route.js";
import { products } from "./data.js";

// ==================================================================
// Constants
const rootDiv = document.querySelector("#root");

const pages = {
  home: homePage,
  products: productsPage,
  cart: cartPage,
  login: loginPage,
};

// ==================================================================
// Burger Menu Logic
const mobileBtn = document.getElementById("mobile-btn");
const navMenu = document.getElementById("nav-menu");

if (mobileBtn) {
  mobileBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ==================================================================
// Handle Navbar Active Tab
function handleNavTabs(tab) {
  const navTabs = document.querySelectorAll(".nav-links li a");
  if (tab) {
    navTabs.forEach((navTab) => navTab.classList.remove("active"));
    navTabs.forEach((navTab) => {
      if (navTab.textContent.trim().toLowerCase() === tab.toLowerCase()) {
        navTab.classList.add("active");
      }
    });
  } else {
    navTabs.forEach((navTab) =>
      navTab.addEventListener("click", (e) => {
        navTabs.forEach((t) => t.classList.remove("active"));
        navTab.classList.add("active");
        navMenu.classList.remove("active");

        let pageKey = navTab.textContent.trim().toLowerCase();
        loadPage(pages[pageKey]);
      }),
    );
  }
}
handleNavTabs();

// ==================================================================
// Page Controller
function loadPage(page = homePage) {
  rootDiv.innerHTML = page;
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  if (document.querySelector("#productsContainer")) {
    showProducts();
  }

  if (document.querySelector("#cart")) {
    showCartList();
    calcTotalPrice();
  }

  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      toggleNavbarAndFooter();
      sessionStorage.setItem("logged", true);
      loadPage(homePage);
    });
  }
}

// ==================================================================
// Global Click Events
rootDiv.addEventListener("click", (e) => {
  if (e.target.textContent.trim() === "Add to Cart") {
    handleAddToCart(+e.target.dataset.id);
  }

  if (e.target.textContent.trim() === "Show Now") {
    loadPage(productsPage);
    handleNavTabs("products");
  }

  const proceedBtn = e.target.closest(".proceed-btn");

  if (proceedBtn) {
    // console.log("Button Clicked!");
    showToast("Order Placed Successfully!");
    clearCart()
  }

  const deleteBtn = e.target.closest(".cart-item-delete-btn");
  if (deleteBtn) {
    deleteItem(deleteBtn.getAttribute("data-id"));
  }

  if (e.target.classList.contains("qty-btn-dec")) {
    decreaseQty(Number(e.target.dataset.id));
  }
  if (e.target.classList.contains("qty-btn-inc")) {
    increaseQty(Number(e.target.dataset.id));
  }
});

document.querySelector(".cart-icon").addEventListener("click", () => {
  if (sessionStorage.getItem("logged")) {
    loadPage(cartPage);
    handleNavTabs("cart");
  } else {
    loadPage(loginPage);
    toggleNavbarAndFooter();
  }
});

document.querySelector(".login-icon").addEventListener("click", () => {
  loadPage(loginPage);
  toggleNavbarAndFooter();
});

// ==================================================================
// Products Logic
function showProducts() {
  const productsDiv = document.querySelector("#productsContainer");
  productsDiv.innerHTML = "";

  products.map((product) => {
    const finalPrice =
      product.discount > 0
        ? (product.price - (product.price * product.discount) / 100).toFixed(2)
        : product.price.toFixed(2);

    productsDiv.innerHTML += `
      <div class="product-card transition shadow-deep">
        <div class="img-wrapper">
          <img class="w-full transition" src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info flex flex-col gap-4">
          <p class="category">${product.category}</p>
          <h4 class="title">${product.name}</h4>
          <div class="flex justify-between items-center">
            <div class="product-price flex items-center gap-2">
              <span class="price">$${finalPrice}</span>
              ${product.discount > 0 ? `<span class="old text-muted">${product.price}</span>` : ""}
            </div>
            <button data-id="${product.id}" class="add-to-cart transition flex flex-center gap-2">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });
}

// ==================================================================
// Cart Logic
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function handleAddToCart(id) {
  const product = products.find((p) => p.id === id);
  if (cart.find((p) => p.id === id)) {
    showToast("Product Already in Cart");
    return;
  }
  cart.push({ ...product, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Added to cart successfully!");
  document.querySelector("#qty").textContent = cart.length;
}

function showCartList() {
  const cartDiv = document.querySelector(".cart-list");
  if (!cartDiv) return;

  cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelector("#qty").textContent = cart.length;
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML =
      "<h3 class='text-center py-10'>Your cart is empty!</h3>";
    return;
  }

  cart.map((item) => {
    const unitPrice =
      item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    const itemTotal = (unitPrice * item.qty).toFixed(2);

    cartDiv.innerHTML += `
      <div class="cart-item bg-white flex shadow-soft items-center gap-8">
        <div class="img-wrapper"><img class="w-full" src="${item.image}" /></div>
        <div class="cart-item-info flex flex-col gap-4 justify-start">
          <h5>${item.name}</h5>
          <span class="text-brand">$${itemTotal}</span>
        </div>
        <div class="cart-item-actions flex flex-col gap-8">
          <span data-id="${item.id}" class="cart-item-delete-btn"><svg class="transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
          <div class="qty-controller flex items-center gap-4">
            <button data-id="${item.id}" class="qty-btn-dec">-</button>
            <span class="qty-value-${item.id}">${item.qty}</span>
            <button data-id="${item.id}" class="qty-btn-inc">+</button>
          </div>
        </div>
      </div>`;
  });
}

function increaseQty(id) {
  const item = cart.find((p) => p.id === id);
  if (item.qty >= 10) {
    showToast("Maximum quantity is 10.");
    return;
  }
  item.qty++;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartList();
  calcTotalPrice();
}

function decreaseQty(id) {
  const item = cart.find((p) => p.id === id);
  if (item.qty <= 1) {
    showToast("Minimum quantity is 1.");
    return;
  }
  item.qty--;
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartList();
  calcTotalPrice();
}

function deleteItem(id) {
  if (confirm("Remove this item?")) {
    cart = cart.filter((item) => item.id !== Number(id));
    localStorage.setItem("cart", JSON.stringify(cart));
    showCartList();
    calcTotalPrice();
  }
}

function calcTotalPrice() {
  const subtotalEl = document.querySelector(".subtotal");
  const totalEl = document.querySelector(".total-price");
  if (!subtotalEl || !totalEl) return;

  const total = cart.reduce((acc, item) => {
    const price =
      item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    return acc + price * item.qty;
  }, 0);

  subtotalEl.textContent = `$${total.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
  cart = []
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartList()
  calcTotalPrice()
}

// ==================================================================
// Utils
const toast = document.querySelector(".toast-msg");
let toastTimeout;

function showToast(message = "") {
  if (!message) return;
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.replace("up", "down");
  toastTimeout = setTimeout(() => toast.classList.replace("down", "up"), 3000);
}

function toggleNavbarAndFooter() {
  document.querySelector("nav").classList.toggle("hidden");
  document.querySelector("footer").classList.toggle("hidden");
}

loadPage();
