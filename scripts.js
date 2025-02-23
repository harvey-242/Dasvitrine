// Sélection des éléments nécessaires
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Gestion du scroll pour rendre la navbar opaque
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle du menu pour le responsive
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Show/Hide skill section
const skillBtn = document.querySelector(".skill_btn");
const skillBot = document.querySelector(".propos_bottom");

skillBtn.addEventListener("click", () => {
  skillBot.classList.toggle("show_skill");
});
