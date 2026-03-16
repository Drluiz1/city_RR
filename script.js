
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#6c63ff" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.2, sync: false } },
    size: { value: 4, random: true, anim: { enable: true, speed: 3, size_min: 0.5, sync: false } },
    line_linked: { enable: true, distance: 130, color: "#6c63ff", opacity: 0.3, width: 1 },
    move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

const themeBtn = document.getElementById('themeBtn');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeBtn.textContent = '☀️';
} else {
  themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

const ham      = document.getElementById('ham');
const navLinks = document.getElementById('navLinks');

ham.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


const sections = document.querySelectorAll('section[id], div[id="hero"]');
const navAs    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
});
