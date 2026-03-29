/**
 * Shivaro Prime — Shared HTML Components
 * Injects nav and footer into every page.
 * Call injectNav() and injectFooter() in each page's <script>.
 */

const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="logo">
      <div class="logo-icon">
        <img src="assests/images/shivaro-logo.jpeg" alt="Shivaro Prime Logo">
      </div>
      <div class="logo-text">
        <span class="logo-name">Shivaro Prime</span>
        <span class="logo-sub">HR Solutions</span>
      </div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html" class="nav-cta">Book a Free Call</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" onclick="closeMenu()">Home</a>
    <a href="services.html" onclick="closeMenu()">Services</a>
    <a href="about.html" onclick="closeMenu()">About Us</a>
    <a href="contact.html" class="mobile-cta" onclick="closeMenu()">📅 Book a Free 30-Min Call</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <div class="logo-icon">
          <img src="/assests/images/shivaro-logo.jpeg" alt="Shivaro Prime Logo">
        </div>
        <div class="logo-text">
          <span class="logo-name">Shivaro Prime</span>
          <span class="logo-sub">HR Solutions</span>
        </div>
      </a>
      <p>Expert HR leadership without the full-time cost. Serving startups, SMEs, and mid-sized enterprises across India, USA, Singapore, and Japan.</p>
      <div class="social-links">
        <a href="https://linkedin.com/company/shivaro-prime-hr-solutions" class="social-link" target="_blank" rel="noopener" title="LinkedIn">in</a>
        <a href="https://wa.me/917030140776" class="social-link" target="_blank" rel="noopener" title="WhatsApp">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="mailto:human.resources@shivaroprimehr.com" class="social-link" title="Email">@</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul class="footer-links">
        <li><a href="services.html#fractional-chro">Fractional CHRO</a></li>
        <li><a href="services.html#hr-outsourcing">HR Outsourcing</a></li>
        <li><a href="services.html#hr-setup">HR Department Setup</a></li>
        <li><a href="services.html#it-staffing">Global IT Staffing</a></li>
        <li><a href="services.html#payroll">Payroll &amp; Compliance</a></li>
        <li><a href="services.html#additional">HR Audit</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html#why-us">Why Us</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="mailto:human.resources@shivaroprimehr.com">human.resources@shivaroprimehr.com</a></li>
        <li><a href="tel:+917030140776">+91 7030140776</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Shivaro Prime HR Solutions. All rights reserved. Pune, Maharashtra, India.</p>
    <div class="footer-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>

<a href="https://wa.me/917030140776?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20HR%20services."
   class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
`;

function injectNav() {
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = NAV_HTML;
}

function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = FOOTER_HTML;
}
