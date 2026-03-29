/**
 * Shivaro Prime HR Solutions — Shared JavaScript
 * Handles: mobile menu, scroll reveal, active nav, form submission
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==================== MOBILE MENU ==================== */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'flex' : 'none';
    const spans = hamburger.querySelectorAll('span');
    if (menuOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }

  window.closeMenu = function () {
    menuOpen = false;
    if (mobileMenu) mobileMenu.style.display = 'none';
    if (hamburger) {
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    }
  };

  /* ==================== SCROLL REVEAL ==================== */
  const reveals  = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObs.observe(el));

  /* ==================== ACTIVE NAV (single-page anchors) ==================== */
  // Only applies when sections with IDs exist on the page
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  if (sections.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) {
          current = sec.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  /* ==================== CONTACT FORM ==================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    const original = btn.textContent;

    btn.textContent    = '✅ Request Sent! We\'ll contact you shortly.';
    btn.style.background = '#16a34a';
    btn.style.color      = 'white';
    btn.disabled         = true;

    setTimeout(() => {
      btn.textContent    = original;
      btn.style.background = '';
      btn.style.color      = '';
      btn.disabled         = false;
      e.target.reset();
    }, 4000);
  }

  /* ==================== MARK CURRENT PAGE IN NAV ==================== */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentPath) {
      link.classList.add('active');
    }
  });

});
