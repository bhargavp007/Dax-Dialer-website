// =======================================================
// ✨ Initialize AOS Animations
// =======================================================
AOS.init({
  duration: 700,
  once: true
});

// =======================================================
// 📱 Mobile Navigation Toggle
// =======================================================
const header = document.querySelector('.site-header');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

if (hamburger && nav) {
  // Toggle menu open/close
  hamburger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('mobile-open');
    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking a nav link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('mobile-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

// =======================================================
// ♿ Accessibility: Close menu on Escape key
// =======================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('mobile-open')) {
    header.classList.remove('mobile-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

// =======================================================
// 💫 Scroll Animation Trigger for Elements with .animate-up
// =======================================================
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

// =======================================================
// 🎁 Try Free Modal Setup
// =======================================================
document.addEventListener("DOMContentLoaded", function () {
  const tryFreeBtns = document.querySelectorAll('.try-free-btn');
  const modal = document.getElementById('tryFreeModal');
  const closeModal = document.getElementById('closeModal');

  if (tryFreeBtns.length > 0 && modal && closeModal) {
    // Open modal on button click
    tryFreeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
      });
    });

    // Close modal on close button click
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});

// =======================================================
// 📧 Form Submission (FormSubmit AJAX integration)
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tryFreeForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const endpoint = 'https://formsubmit.co/ajax/patelbhargav8262@gmail.com';
    const fd = new FormData(form);

    fetch(endpoint, {
      method: 'POST',
      body: fd
    })
      .then(r => r.json())
      .then(data => {
        // ✅ Success handling
        alert('Thanks — submission sent!');
        form.reset();

        // Close modal after submission
        const closeBtn = document.getElementById('closeModal');
        if (closeBtn) closeBtn.click();
      })
      .catch(err => {
        console.error('FormSubmit error:', err);
        alert('Sorry — submission failed. Please try again.');
      });
  });
});

// =======================================================
// 🎉 Success Popup Handling (Invisible form + Auto-close)
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tryFreeForm');
  const popup = document.getElementById('successPopup');
  const modal = document.getElementById('tryFreeModal');

  if (form && popup) {
    form.addEventListener('submit', () => {
      // Delay slightly to let FormSubmit process
      setTimeout(() => {
        popup.style.display = 'block'; // Show success message
        form.reset();

        // Auto-close popup & modal
        setTimeout(() => {
          popup.style.display = 'none';
          if (modal) modal.style.display = 'none';
        }, 3000);
      }, 1000);
    });
  }
});
