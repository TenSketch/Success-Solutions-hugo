(() => {
  // <stdin>
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  document.querySelector(".navbar-toggler").addEventListener("click", function(event) {
    event.stopPropagation();
    const icons = document.querySelectorAll(".navbar-toggler .hamburger-icon");
    icons.forEach((icon) => {
      icon.classList.toggle("open");
    });
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
    } else {
      bootstrap.Collapse.getInstance(navbarCollapse).show();
    }
  });
  document.addEventListener("click", function(event) {
    const navbar = document.querySelector(".navbar");
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
      const icons = document.querySelectorAll(".navbar-toggler .hamburger-icon");
      icons.forEach((icon) => {
        icon.classList.remove("open");
      });
      if (navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }
    }
  });
  document.querySelector(".navbar").addEventListener("click", function(event) {
    event.stopPropagation();
  });
})();
