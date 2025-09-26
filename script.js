const hamburgerBtn = document.querySelector("#hamburger");
const closeBtn = document.querySelector("#close");
const navMenu = document.querySelector(".nav-menu");
const overLay = document.querySelector(".overlay");

function showSidebar() {
  navMenu.classList.add("active");
  overLay.style.display = "block";
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function hideSidebar() {
  navMenu.classList.remove("active");
  overLay.style.display = "none";
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
}
