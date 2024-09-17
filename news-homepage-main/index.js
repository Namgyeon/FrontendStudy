const MenuIcon = document.querySelector("#MenuIcon");
const mobileMenu = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

MenuIcon.addEventListener("click", () => {
  MenuIcon.style.display = "none";
  mobileMenu.style.display = "flex";
  overlay.style.display = "block";
});

const mobileMenuClose = document.querySelector("#mobileMenuClose");

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  MenuIcon.style.display = "flex";
  overlay.style.display = "none";
});
