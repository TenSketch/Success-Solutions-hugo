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


// challenges animation section
document.addEventListener('DOMContentLoaded', () => {
  const challengesSection = document.querySelector('.challenges-section');
  const typingText = document.getElementById('typing-text');
  const slidingItems = document.getElementById('sliding-items');
  const finalParagraph = document.getElementById('final-paragraph');

  let typingStarted = false;
  let typingIndex = 0;
  const typingMessage = "The real issues in organizations are the areas to which the Management should pay attention such as...";
  const slidingMessages = [
    "Direct business-related bottlenecks",
    "New Products and competition related challenges",
    "Exploring company expansion plans",
    "Share Market positioning initiatives etc"
  ];
  let slideIndex = 0;

  // Typing animation
  function typeText() {
    if (typingIndex < typingMessage.length) {
      typingText.textContent += typingMessage.charAt(typingIndex);
      typingIndex++;
      setTimeout(typeText, 50); // Typing speed
    } else {
      setTimeout(startSliding, 1000); // Start sliding animation
    }
  }

  // Sliding items animation
  function startSliding() {
    if (slideIndex < slidingMessages.length) {
      const span = document.createElement('span');
      span.textContent = slidingMessages[slideIndex];
      slidingItems.innerHTML = ''; // Clear previous content
      slidingItems.appendChild(span);

      span.style.animation = 'slide-in-out 3s forwards ease-in-out';
      slideIndex++;

      setTimeout(startSliding, 3000); // Time between messages
    } else {
      slidingItems.style.display = 'none'; // Hide sliding items
      showFinalParagraph();
    }
  }

  function showFinalParagraph() {
    finalParagraph.classList.remove('d-none');
    finalParagraph.style.animation = 'slide-in-final 1s ease-in-out forwards';
  }

  // Intersection Observer for triggering typing animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !typingStarted) {
        typingStarted = true;
        typeText();
      }
    });
  });

  observer.observe(challengesSection);
});
