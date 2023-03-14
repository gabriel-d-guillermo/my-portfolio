// const body = document.body;
// const element = document.querySelector(".fade-in");

// window.addEventListener("scroll", function () {
//   // var position = element.getBoundingClientRect();
//   // Get the current scroll position
//   const scrollPosition = window.scrollY;
//   // Calculate the opacity based on the scroll position
//   const opacity = scrollPosition / 400;

//   if (opacity >= 0) {
//     element.style.opacity = opacity;
//   }
// });

const about = document.querySelectorAll(".about-content-wrapper");
const h3 = document.querySelectorAll("h3");

const options = {
  threshold: 0,
  rootMargin: "-100px 0px -80px 0px ",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.target === "h3") {
      console.log("yehey!");
    }
    if (!entry.isIntersecting) {
      entry.target.classList.remove("visible");
      return;
    }
    entry.target.classList.add("visible");
  });
}, options);

const observerH3 = new IntersectionObserver(function (entries, observerH3) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("animate");
      return;
    }

    entry.target.classList.add("animate");
  });
}, options);

about.forEach(e => {
  observer.observe(e);
});
h3.forEach(e => {
  observerH3.observe(e);
});
