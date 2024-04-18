const header = document.querySelector('.head');
const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
// const headul = document.querySelector('.headul_li');
const navmenu = document.querySelector('#alignment').cloneNode(1);
// const local = document.querySelector('.change-lang').cloneNode(1);
const local = document.querySelector('.change-lang');
const navmenunt = navmenu.querySelectorAll('.lin');
const body = document.body;
const links = Array.from(navmenunt);
const background = document.querySelector('.blackout');

// BURGER

burger.addEventListener('click', openMenu);

function openMenu(event) {
  event.preventDefault();
  popup.classList.toggle('open');
  header.classList.toggle('open');
  burger.classList.toggle('active');
  body.classList.toggle('stop-scrolling');
  background.classList.toggle('unactive');
  menuPopup();
}

function menuPopup() {
  popup.append(navmenu);
  // popup.append(local);
  navmenu.classList.toggle('burger');
  local.classList.toggle('burgerer');
}

links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

background.addEventListener('click', (e) => {
  if (header.classList.contains('open')) {
    popup.classList.remove('open');
    header.classList.remove('open');
    burger.classList.remove('active');
    body.classList.remove('stop-scrolling');
    navmenu.classList.remove('burger');
    background.classList.toggle('unactive');
    local.classList.remove('burgerer');
  }
});

function closeMenu() {
  popup.classList.remove('open');
  header.classList.remove('open');
  burger.classList.remove('active');
  body.classList.remove('stop-scrolling');
  navmenu.classList.remove('burger');
  background.classList.toggle('unactive');
  local.classList.remove('burgerer');
}

const select = document.querySelector('select');
// console.log(select);
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  // console.log(lang);
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  // console.log(select);
  // console.log(hash);
  hash = hash.substr(1);
  // console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  // document.querySelector('title').innerHTML = langArr['unit'][hash];
  // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
