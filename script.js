// Progressive enhancement: navigation remains usable when JavaScript is disabled.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  document.body.classList.add('js-enabled');
  toggle.hidden = false;
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  const mobile = window.matchMedia('(max-width: 700px)');
  const updateMenu = () => { toggle.hidden = !mobile.matches; setOpen(false); };
  mobile.addEventListener('change', updateMenu);
  updateMenu();
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
