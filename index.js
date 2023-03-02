const body = document.body;

window.onload = function () {
  body.style.opacity = 1;
};

const element = document.querySelector(".fade-in");
const slider = document.querySelector(".slider");
const iconMoon = document.querySelector(".fa-moon");
const iconSun = document.querySelector(".fa-sun");

window.addEventListener("scroll", function () {
  // var position = element.getBoundingClientRect();
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  // Calculate the opacity based on the scroll position
  const opacity = scrollPosition / 800;

  // console.log(opacity - scrollPosition);

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
});

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  slider.classList.toggle("toogle");
  iconMoon.classList.toggle("icon-opacity-moon");
  iconSun.classList.toggle("icon-opacity-sun");

  console.log(slider);
}

function toogleNavBar() {
  const navBar = document.querySelector("nav");
  navBar.classList.toggle("navbar-expand");
  body.classList.toggle("over-flow");
}
