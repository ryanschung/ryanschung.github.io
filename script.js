// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a');

function updateActive() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < bottom) {
        link.style.color = 'var(--color-accent)';
      } else {
        link.style.color = '';
      }
    }
  });
}

window.addEventListener('scroll', updateActive);
updateActive();
