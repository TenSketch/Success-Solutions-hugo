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
    const typingText = document.getElementById("typing-text");
    const slidingItems = document.getElementById("sliding-items");
    const finalParagraph = document.getElementById("final-paragraph");
    const typingMessage = "The real challenges in organizations are, and what it's people should pay attention to is...";
    let typingIndex = 0;
    function typeText() {
      if (typingIndex < typingMessage.length) {
        typingText.textContent += typingMessage.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeText, 50);
      } else {
        setTimeout(startSliding, 1e3);
      }
    }
    const slidingMessages = [
      "resolving problems",
      "being creative",
      "thinking out of box",
      "foresee current",
      "future challenges",
      "seeing the broad spectrum of possibilities"
      // "also.....",
      // "learning how life changes",
      // "market shifts",
      // "politics",
      // "science/high-tech",
      // "new resources",
      // "economics",
      // "social needs"
    ];
    let slideIndex = 0;
    function startSliding() {
      if (slideIndex < slidingMessages.length) {
        const span = document.createElement("span");
        span.textContent = slidingMessages[slideIndex];
        slidingItems.innerHTML = "";
        slidingItems.appendChild(span);
        span.style.animation = "slide-in-out 3s forwards ease-in-out";
        slideIndex++;
        setTimeout(startSliding, 3e3);
      } else {
        showFinalParagraph();
      }
    }
    function showFinalParagraph() {
      finalParagraph.classList.remove("d-none");
      finalParagraph.style.animation = "slide-in-final 1s ease-in-out forwards";
    }
    setTimeout(typeText, 2e3);
  });
})();
