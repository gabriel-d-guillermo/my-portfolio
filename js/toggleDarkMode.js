// const body = document.body;
const toggleTheme = document.querySelector(".toggle-theme");
const slider = document.querySelector(".slider");
const iconMoon = document.querySelector(".fa-moon");
const iconSun = document.querySelector(".fa-sun");

let theme = localStorage.getItem("theme");
console.log(theme);
const toogleIcon = () => {
  slider.classList.toggle("toogle");
  iconMoon.classList.toggle("icon-opacity-moon");
  iconSun.classList.toggle("icon-opacity-sun");
};
const lightMode = () => {
  body.classList.add("light-mode");
  theme = localStorage.setItem("theme", "light");
};

const darkMode = () => {
  body.classList.remove("light-mode");
  theme = localStorage.setItem("theme", "dark");
};

//check the theme localStorage value when loaded
if (theme === "light") {
  lightMode();
  toogleIcon();
} else {
  darkMode();
}

function toggleLightMode() {
  slider.classList.toggle("toogle");
  iconMoon.classList.toggle("icon-opacity-moon");
  iconSun.classList.toggle("icon-opacity-sun");
}

toggleTheme.addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    lightMode();
  } else {
    darkMode();
  }
  toogleIcon();
});
