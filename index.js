const body = document.body;
const element = document.querySelector(".fade-in");

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

//toggle dark mode

//toggle navbar
const navBar = document.querySelector("nav");

function toogleNavBar() {
  navBar.classList.toggle("navbar-expand");
  body.classList.toggle("over-flow");
}
