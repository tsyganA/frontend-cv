const header = document.querySelector('.head');
const burger = document.querySelector('#burger');
const navmenu = document.querySelectorAll('.lin');
const link = Array.from(navmenu);
const body = document.body;
const background = document.querySelector('.blackout');

// BURGER

burger.addEventListener('click', openMenu);

function openMenu(event) {
  event.preventDefault();
  header.classList.toggle('open');
  burger.classList.toggle('active');
  body.classList.toggle('stop-scrolling');
  background.classList.toggle('active');
}

link.forEach(link => {
  link.addEventListener('click', closeMenu);
});

background.addEventListener('click', e => {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    burger.classList.remove('active');
    body.classList.remove('stop-scrolling');
    background.classList.remove('active');
  }
});

function closeMenu() {
  header.classList.remove('open');
  burger.classList.remove('active');
  body.classList.remove('stop-scrolling');
  background.classList.remove('active');
}

// Language

const select = document.querySelector('select');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
