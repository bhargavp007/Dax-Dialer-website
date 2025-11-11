// ----------------------------
// Initialize AOS animations
// ----------------------------
AOS.init({
  duration: 700,
  once: true
});

// ----------------------------
// Mobile nav toggle
// ----------------------------
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

// ----------------------------
// Accessibility: close menu on Escape key
// ----------------------------
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('mobile-open')) {
    header.classList.remove('mobile-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// ----------------------------
// Scroll animations for elements with .animate-up
// ----------------------------
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

// ----------------------------
// Try Free Modal open / close
// ----------------------------
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
        modal.classList.add('fade-in');
      });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
      modal.classList.remove('fade-in');
      modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('fade-in');
        modal.style.display = 'none';
      }
    });
  }
});

// ----------------------------
// Try Free Form (AJAX FormSubmit version)
// ----------------------------
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tryFreeForm');
  const popup = document.getElementById('successPopup');
  const modal = document.getElementById('tryFreeModal');

  if (!form || !popup) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Gather form data
    const fd = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/patelbhargav8262@gmail.com', {
        method: 'POST',
        body: fd
      });

      if (!res.ok) throw new Error('Network response not OK');
      const data = await res.json();

      // Show success popup
      popup.style.display = 'block';
      setTimeout(() => popup.style.opacity = '1', 10);

      // Clear form fields
      form.reset();

      // Hide popup and modal after delay
      setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
          popup.style.display = 'none';
          modal.style.display = 'none';
        }, 300);
      }, 3000);

    } catch (err) {
      console.error('FormSubmit error:', err);
      alert('⚠️ Unable to send form right now. Please try again.');
    }
  });
});
