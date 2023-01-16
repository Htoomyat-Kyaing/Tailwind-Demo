const initApp = () => {
  let darkBtn = document.querySelector("#darkBtn");
  darkBtn.checked = true;
  document.documentElement.classList.add("dark");

  darkBtn.addEventListener("change", () => {
    if (darkBtn.checked) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  });

  const hamburgerBtn = document.querySelector("#hamburger-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileMenuBtns = $("#mobile-menu").find("a,button");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenuBtns.on("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp());
