/* ============================================================
   FREE EUROPEAN YOUTH e.V. — Main JavaScript
   ============================================================ */

/* -------- STICKY HEADER -------- */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* -------- HAMBURGER MENU -------- */
const hamburger = document.querySelector('.hamburger');
const mainNav   = document.querySelector('.main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  // Close menu when a link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });
}

/* -------- ACTIVE NAV LINK -------- */
(function markActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* -------- SCROLL ANIMATIONS -------- */
const animatedEls = document.querySelectorAll('.animate-on-scroll');
if (animatedEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  animatedEls.forEach(el => observer.observe(el));
}

/* -------- CONTACT FORM (demo) -------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const successMsg = document.getElementById('formSuccess');
    if (successMsg) {
      successMsg.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
    }
  });
}

/* -------- GALLERY LIGHTBOX -------- */
(function initGalleryLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  // Create lightbox container
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.style.cssText = `
    display:none; position:fixed; inset:0; background:rgba(0,0,0,.92);
    z-index:9999; align-items:center; justify-content:center; cursor:zoom-out;
  `;
  lb.innerHTML = `
    <button id="lbClose" style="position:absolute;top:20px;right:28px;background:none;border:none;color:#fff;font-size:2.2rem;cursor:pointer;line-height:1;">&times;</button>
    <button id="lbPrev" style="position:absolute;left:20px;background:rgba(255,255,255,.1);border:none;color:#fff;font-size:1.8rem;width:48px;height:48px;border-radius:50%;cursor:pointer;">&#8249;</button>
    <img id="lbImg" style="max-width:90vw;max-height:88vh;object-fit:contain;border-radius:8px;" src="" alt="">
    <button id="lbNext" style="position:absolute;right:20px;background:rgba(255,255,255,.1);border:none;color:#fff;font-size:1.8rem;width:48px;height:48px;border-radius:50%;cursor:pointer;">&#8250;</button>
  `;
  document.body.appendChild(lb);

  let currentIndex = 0;
  const images = [];
  items.forEach(item => {
    const img = item.querySelector('img');
    images.push(img ? img.src : '');
  });

  function openLB(index) {
    currentIndex = index;
    document.getElementById('lbImg').src = images[currentIndex];
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeLB() {
    lb.style.display = 'none';
    document.body.style.overflow = '';
  }

  items.forEach((item, i) => item.addEventListener('click', () => openLB(i)));
  document.getElementById('lbClose').addEventListener('click', closeLB);
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.getElementById('lbPrev').addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('lbImg').src = images[currentIndex];
  });
  document.getElementById('lbNext').addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('lbImg').src = images[currentIndex];
  });
  document.addEventListener('keydown', e => {
    if (lb.style.display !== 'flex') return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft')  document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });
})();

/* -------- DİL DEĞİŞTİRİCİ -------- */
function switchLang(lang) {
  // Buton görünümünü güncelle
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-de').classList.toggle('active', lang === 'de');

  // Google Translate ile çevir
  if (lang === 'de') {
    if (!document.getElementById('gt-script')) {
      // Google Translate'i yükle
      var s = document.createElement('script');
      s.id = 'gt-script';
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateInit';
      document.body.appendChild(s);

      window.googleTranslateInit = function() {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'de',
          autoDisplay: true,
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'gt-container');
        // Otomatik Almancaya geç
        setTimeout(function() {
          var sel = document.querySelector('.goog-te-combo');
          if (sel) { sel.value = 'de'; sel.dispatchEvent(new Event('change')); }
        }, 1000);
      };
    } else {
      // Zaten yüklüyse direkt geç
      var sel = document.querySelector('.goog-te-combo');
      if (sel) { sel.value = 'de'; sel.dispatchEvent(new Event('change')); }
    }
  } else {
    // İngilizceye dön
    var sel = document.querySelector('.goog-te-combo');
    if (sel) { sel.value = 'en'; sel.dispatchEvent(new Event('change')); }
  }
}
