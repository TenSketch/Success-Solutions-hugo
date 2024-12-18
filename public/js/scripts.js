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
  document.addEventListener("DOMContentLoaded", () => {
    const challengesSection = document.querySelector(".challenges-section");
    const typingText = document.getElementById("typing-text");
    const slidingItems = document.getElementById("sliding-items");
    const finalParagraph = document.getElementById("final-paragraph");
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
        typingText.textContent += typingMessage.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeText, 50);
      } else {
        setTimeout(startSliding, 1e3);
      }
    }
    function startSliding() {
      if (slideIndex < slidingMessages.length) {
        const span = document.createElement("span");
        span.innerHTML = slidingMessages[slideIndex];
        slidingItems.innerHTML = "";
        slidingItems.appendChild(span);
        span.style.animation = "slide-in-out 3s forwards ease-in-out";
        slideIndex++;
        setTimeout(startSliding, 3e3);
      } else {
        slidingItems.style.display = "none";
        showFinalParagraph();
      }
    }
    function showFinalParagraph() {
      finalParagraph.classList.remove("d-none");
      finalParagraph.style.animation = "slide-in-final 1s ease-in-out forwards";
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !typingStarted) {
          typingStarted = true;
          typeText();
        }
      });
    });
    observer.observe(challengesSection);
  });
})();
