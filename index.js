const body = document.body;
const element = document.querySelector(".fade-in");
const navBar = document.querySelector("nav");
const slider = document.querySelector(".slider");
const iconMoon = document.querySelector(".fa-moon");
const iconSun = document.querySelector(".fa-sun");

//when page laoded
window.onload = function () {
  body.style.opacity = 1;
};

window.addEventListener("scroll", function () {
  // var position = element.getBoundingClientRect();
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  // Calculate the opacity based on the scroll position
  const opacity = scrollPosition / 800;

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
});

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  slider.classList.toggle("toogle");
  iconMoon.classList.toggle("icon-opacity-moon");
  iconSun.classList.toggle("icon-opacity-sun");
  console.log("asd");
}

function toogleNavBar() {
  navBar.classList.toggle("navbar-expand");
  body.classList.toggle("over-flow");
}
