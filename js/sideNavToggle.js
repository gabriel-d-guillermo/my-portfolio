const navBar = document.querySelector("nav");
const navlinks = document.querySelectorAll(".nav-list-link");

const toogleNavBar = () => {
  if (window.innerWidth <= "510") {
    navBar.classList.toggle("navbar-expand");
    body.classList.toggle("over-flow");
  }
};

navlinks.forEach(link => {
  link.addEventListener("click", () => {
    toogleNavBar();
  });
});
