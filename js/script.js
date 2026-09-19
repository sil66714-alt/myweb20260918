const nav = document.querySelector('#mainNav');
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
  let current = 'home';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('#navbarMenu .nav-link, #navbarMenu .nav-contact').forEach((link) => {
  link.addEventListener('click', () => bootstrap.Collapse.getOrCreateInstance('#navbarMenu').hide());
});
