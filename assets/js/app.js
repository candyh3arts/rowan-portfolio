const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  menu.hidden = expanded;
})

document.addEventListener('click', (event) => {
  const isClickInside = toggle.contains(event.target) || menu.contains(event.target);
  const expanded = toggle.getAttribute('aria-expanded') === 'true';

  if (!isClickInside && expanded) {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  }
})

document.addEventListener('keydown', (e) => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  if (e.key === 'Escape' && expanded) {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    toggle.focus();
  }
});
