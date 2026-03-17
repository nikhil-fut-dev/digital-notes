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

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-list");

toggle.addEventListener("click", function(){
nav.classList.toggle("active");
});

