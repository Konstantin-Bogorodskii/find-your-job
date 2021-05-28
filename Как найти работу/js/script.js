const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-btn");

menuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});
closeMenuButton.addEventListener("click", (event) => {
  menu.classList.toggle("is-open");
});
