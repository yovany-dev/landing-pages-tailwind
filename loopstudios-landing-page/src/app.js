const btnClose = document.getElementById('btn-close');
const btnOpen = document.getElementById('btn-open');
const menu = document.getElementById('menu');

btnOpen.addEventListener('click', () => {
  btnClose.classList.remove('hidden');
  btnOpen.classList.add('hidden');

  menu.classList.replace('translate-x-full', 'translate-x-0');
});

btnClose.addEventListener('click', () => {
  btnOpen.classList.remove('hidden');
  btnClose.classList.add('hidden');

  menu.classList.replace('translate-x-0', 'translate-x-full');
});
