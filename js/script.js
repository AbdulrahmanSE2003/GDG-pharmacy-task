// NOTE Burger Menu Logic

const mobileBtn = document.getElementById("mobile-btn");
const navMenu = document.getElementById("nav-menu");

mobileBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
