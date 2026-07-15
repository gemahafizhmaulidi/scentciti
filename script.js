const navbar = document.querySelector('[data-navbar]');
const progress = document.querySelector('.scroll-progress span');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  if (open) return closeMenu();
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Close navigation');
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
});

mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

const parallaxElements = [...document.querySelectorAll('[data-parallax]')];
const cardElements = [...document.querySelectorAll('[data-card-parallax]')];
const imageParallaxElements = [...document.querySelectorAll('[data-image-parallax]')];
let scheduled = false;

function renderScroll() {
  const scrollY = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  navbar.classList.toggle('scrolled', scrollY > 24);
  progress.style.transform = `scaleX(${scrollable > 0 ? scrollY / scrollable : 0})`;

  if (!reducedMotion.matches) {
    parallaxElements.forEach(element => {
      const speed = Number(element.dataset.parallax || 0);
      const rotation = Number(element.dataset.rotate || 0);
      const rect = element.parentElement.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * speed;
      element.style.transform = `translate3d(0, ${offset}px, 0) rotate(${scrollY * rotation}deg)`;
    });

    cardElements.forEach(element => {
      const speed = Number(element.dataset.cardParallax || 0);
      const rect = element.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * speed;
      element.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    imageParallaxElements.forEach(figure => {
      const image = figure.querySelector('img');
      if (!image) return;
      const rect = figure.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * 0.045;
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.015)`;
    });
  }
  scheduled = false;
}

window.addEventListener('scroll', () => {
  if (!scheduled) {
    requestAnimationFrame(renderScroll);
    scheduled = true;
  }
}, { passive: true });

window.addEventListener('resize', renderScroll);
renderScroll();
