// ================= SCROLL REVEAL ANIMATION =================

// Select all elements we want to animate
const revealElements = document.querySelectorAll(
  ".section, .card, .hero h1, .hero h3, .hero p, .hero-buttons"
);

// Initial hidden state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.9s ease";
});

// Reveal logic
function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// Run on scroll and on page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
