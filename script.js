// Get the navigation menu
const navbar = document.getElementById('navbar');

// Listen for scroll events to change the navbar's background color
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Optionally, you can add hover effects with CSS or JS as shown above
