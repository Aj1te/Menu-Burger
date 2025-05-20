const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// burger.addEventListener('click', () => {
//   menu.classList.toggle('open');
// });

burger.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
})