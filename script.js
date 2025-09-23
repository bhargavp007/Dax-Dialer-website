// Initialize AOS animations
AOS.init({
  duration: 700,
  once: true
});

/* Mobile nav toggle */
const header = document.querySelector('.site-header');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('mobile-open');
    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking any nav link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('mobile-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* Accessibility: close menu on Escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('mobile-open')) {
    header.classList.remove('mobile-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

/* Scroll animations for elements with .animate-up */
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

/* Try Free Modal */
document.addEventListener("DOMContentLoaded", function () {
  const tryFreeBtns = document.querySelectorAll('.try-free-btn');
  const modal = document.getElementById('tryFreeModal');
  const closeModal = document.getElementById('closeModal');

  if (tryFreeBtns.length > 0 && modal && closeModal) {
    // Open modal
    tryFreeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
      });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});