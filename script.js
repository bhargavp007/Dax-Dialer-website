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

/* Try Free Modal + Formspree submission */
document.addEventListener("DOMContentLoaded", function () {
  const tryFreeBtns = document.querySelectorAll('.try-free-btn');
  const modal = document.getElementById('tryFreeModal');
  const closeModal = document.getElementById('closeModal');
  const form = document.getElementById('tryFreeForm');

  // Open modal
  tryFreeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
    });
  });

  // Close modal
  if (closeModal) {
    closeModal.addEventListener('click', () => modal.style.display = 'none');
  }
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Handle form submission with AJAX
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });

        if (response.ok) {
          alert('✅ Your request has been sent!');
          form.reset();
          modal.style.display = 'none';
        } else {
          alert('⚠️ Something went wrong. Please try again.');
        }
      } catch (error) {
        alert('⚠️ Network error. Please check your connection.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = origText;
      }
    });
  }
});