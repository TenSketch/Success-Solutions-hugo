document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle the navbar when the hamburger is clicked
document.querySelector('.navbar-toggler').addEventListener('click', function(event) {
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
document.addEventListener('click', function(event) {
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
document.querySelector('.navbar').addEventListener('click', function(event) {
  event.stopPropagation();
});

// challenges animation section
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const slidingItems = document.getElementById('sliding-items');
    const finalParagraph = document.getElementById('final-paragraph');
  
    // Typing animation
    const typingMessage = "The real challenges in organizations are, and what it's people should pay attention to is...";
    let typingIndex = 0;
  
    function typeText() {
      if (typingIndex < typingMessage.length) {
        typingText.textContent += typingMessage.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeText, 50); // Speed of typing
      } else {
        // Start sliding animation after typing completes
        setTimeout(startSliding, 1000);
      }
    }
  
    // Sliding items animation
    const slidingMessages = [
      "resolving problems",
      "being creative",
      "thinking out of box",
      "foresee current",
      "future challenges",
      "seeing the broad spectrum of possibilities",
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
        const span = document.createElement('span');
        span.textContent = slidingMessages[slideIndex];
        slidingItems.innerHTML = ''; // Clear previous content
        slidingItems.appendChild(span);
  
        // Apply slide-in-out animation
        span.style.animation = 'slide-in-out 3s forwards ease-in-out';
        slideIndex++;
  
        // Schedule next message
        setTimeout(startSliding, 3000); // Total animation duration
      } else {
        // Show final paragraph
        showFinalParagraph();
      }
    }
  
    function showFinalParagraph() {
      finalParagraph.classList.remove('d-none');
      finalParagraph.style.animation = 'slide-in-final 1s ease-in-out forwards';
    }
  
    // Start the typing animation after 2 seconds
    setTimeout(typeText, 2000);
  });
  
  

  