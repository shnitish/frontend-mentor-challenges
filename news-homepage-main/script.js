const menuButton = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".primary-navigation");
const backdrop = document.querySelector(".backdrop");

menuButton.addEventListener("click", ()=> {
  navList.hasAttribute("data-visible") ? menuButton.setAttribute("aria-expanded", false) : menuButton.setAttribute("aria-expanded", true);
  navList.toggleAttribute("data-visible");
  backdrop.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");
})