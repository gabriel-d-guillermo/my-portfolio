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

const about = document.querySelectorAll(".about-content");

const options = {
  threshold: 0,
  rootMargin: "-80px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("visible");
      return;
    }
    entry.target.classList.add("visible");
    // console.log(entry.target);
  });
}, options);

about.forEach(e => {
  observer.observe(e);
});
