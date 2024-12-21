document.addEventListener("DOMContentLoaded", () => {
  // Navbar scrolling behavior
  const navbar = document.querySelector(".navbar");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle navbar on hamburger click
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navbarToggler.addEventListener('click', (event) => {
    event.stopPropagation();
    const icons = navbarToggler.querySelectorAll('.hamburger-icon');
    icons.forEach(icon => icon.classList.toggle('open'));
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
    navbarCollapse.classList.contains('show') ? bsCollapse.hide() : bsCollapse.show();
  });

  // Close navbar when clicking outside
  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      const icons = navbarToggler.querySelectorAll('.hamburger-icon');
      icons.forEach(icon => icon.classList.remove('open'));
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (navbarCollapse.classList.contains('show')) bsCollapse.hide();
    }
  });

  // Close other dropdowns when a new one is opened
  document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function () {
      const openDropdowns = document.querySelectorAll('.dropdown.show');
      openDropdowns.forEach(dropdown => {
        if (dropdown !== this.parentElement) {
          dropdown.classList.remove('show');
          const menu = dropdown.querySelector('.dropdown-menu');
          menu.classList.remove('show');
        }
      });
    });
  });

  // Intersection Observer for challenges animation
  const challengesSection = document.querySelector('.challenges-section');
  if (challengesSection) {
    const typingText = document.getElementById('typing-text');
    const slidingItems = document.getElementById('sliding-items');
    const finalParagraph = document.getElementById('final-paragraph');
    let typingStarted = false;
    let typingIndex = 0;
    const typingMessage = "The real issues in organizations are the areas to which the Management should pay attention such as...";
    const slidingMessages = [
      `<i class="fa-solid fa-hand-point-right me-2"></i> Direct business-related bottlenecks`,
      `<i class="fa-solid fa-hand-point-right me-2"></i> New Products and competition related challenges`,
      `<i class="fa-solid fa-hand-point-right me-2"></i> Exploring company expansion plans`,
      `<i class="fa-solid fa-hand-point-right me-2"></i> Share Market positioning initiatives etc`
    ];
    let slideIndex = 0;

    function typeText() {
      if (typingIndex < typingMessage.length) {
        typingText.textContent += typingMessage.charAt(typingIndex++);
        setTimeout(typeText, 50);
      } else {
        setTimeout(startSliding, 1000);
      }
    }

    function startSliding() {
      if (slideIndex < slidingMessages.length) {
        slidingItems.innerHTML = `<span style="animation: slide-in-out 3s forwards ease-in-out;">${slidingMessages[slideIndex++]}</span>`;
        setTimeout(startSliding, 3000);
      } else {
        slidingItems.style.display = 'none';
        finalParagraph.classList.remove('d-none');
        finalParagraph.style.animation = 'slide-in-final 1s ease-in-out forwards';
      }
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !typingStarted) {
          typingStarted = true;
          typeText();
        }
      });
    });
    observer.observe(challengesSection);
  }
});
