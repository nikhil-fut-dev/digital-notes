const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.2 },
);
sections.forEach((sec) => observer.observe(sec));

lightbox.addEventListener("click", () => (lightbox.style.display = "none"));

ba.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  ba.querySelector(".after").style.width = x + "px";
  slider.style.left = x + "px";
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
