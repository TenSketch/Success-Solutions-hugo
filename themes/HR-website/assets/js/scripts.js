document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle the navbar when the hamburger is clicked
document.querySelector('.navbar-toggler').addEventListener('click', function (event) {
  // Prevent the click event from propagating to the document
  event.stopPropagation();

  const icons = document.querySelectorAll('.navbar-toggler .hamburger-icon');
  icons.forEach(icon => {
    icon.classList.toggle('open');
  });

  // Manually trigger Bootstrap collapse (without toggling class)
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    // If the navbar is shown, collapse it
    bootstrap.Collapse.getInstance(navbarCollapse).hide();
  } else {
    // Otherwise, show it
    bootstrap.Collapse.getInstance(navbarCollapse).show();
  }
});

// Close the navbar when clicking outside of the navbar
document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar');
  const toggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Check if the clicked area is outside the navbar and navbar-toggler
  if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
    // Remove the 'open' class from the hamburger icon
    const icons = document.querySelectorAll('.navbar-toggler .hamburger-icon');
    icons.forEach(icon => {
      icon.classList.remove('open');
    });

    // Close the navbar by calling Bootstrap's collapse.hide method
    if (navbarCollapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
  }
});

// Prevent closing the navbar when clicking inside the navbar or on the toggler
document.querySelector('.navbar').addEventListener('click', function (event) {
  event.stopPropagation();
});
