// Initialize AOS (keep defaults so animations remain)
AOS.init({
  duration: 700,
  once: true
});

/* Mobile nav toggle */
const header = document.querySelector('.site-header');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  header.classList.toggle('mobile-open');
  // animate hamburger to X
  hamburger.classList.toggle('is-active');
});

/* Optional: close mobile menu on link click */
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (header.classList.contains('mobile-open')) {
      header.classList.remove('mobile-open');
      hamburger.classList.remove('is-active');
    }
  });
});

/* Accessibility: keyboard close */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('mobile-open')) {
    header.classList.remove('mobile-open');
    hamburger.classList.remove('is-active');
  }
});
