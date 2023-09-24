import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.esm.js';

// 漢堡選單按鈕
const hamburgerBtn = document.querySelector('.navbar-btn');
const allHamburgerLines = [...document.querySelectorAll('.hamburger-line')];

hamburgerBtn.addEventListener('click', switchHamburger);

function switchHamburger() {
  allHamburgerLines.forEach((item) => {
    item.classList.toggle('active');
  });
}

const countDown = document.querySelector('.count-down');
let timer;

function startTimer() {
  let number = 60;
  timer = setInterval(() => {
    number--;
    if (number <= 54) {
      number = 54;
      clearInterval(timer);
      startTimer();
    }
    countDown.innerText = number;
  }, 1000);
}

startTimer();

const categoryBtn = [...document.querySelectorAll('.category .btn-question')];
categoryBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    categoryBtn.forEach((btn) => {
      btn.classList.remove('text-primary');
      btn.parentElement.classList.remove('bg-dark');
    });
    e.target.classList.add('text-primary');
    e.target.parentElement.classList.add('bg-dark');

    switchAccordion(e.target.getAttribute('data-tab'));
  });
});

function switchAccordion(targetTab) {
  const accordionTabContent = [
    ...document.querySelectorAll('[data-accordion-content]'),
  ];
  accordionTabContent.forEach((tabItem) => {
    tabItem.classList.remove('accordion-content__active');
    if (tabItem.getAttribute('data-accordion-content') === targetTab) {
      tabItem.classList.toggle('accordion-content__active');
    }
  });
}

if (module.hot) {
  module.hot.accept();
}

import img1 from './assets/images/KV-1.svg';
import img2 from './assets/images/KV-2.svg';
import img3 from './assets/images/KV-3.svg';
import img4 from './assets/images/KV-4.svg';
import img5 from './assets/images/KV-5.svg';
import img6 from './assets/images/KV-6.svg';
import img7 from './assets/images/KV-7.svg';
import img8 from './assets/images/nav_star.svg';
import img9 from './assets/images/scroll down.svg';
import img10 from './assets/images/image-painpoint-1.svg';
import img11 from './assets/images/image-painpoint-2.svg';
import img12 from './assets/images/image-painpoint-3.svg';
import img13 from './assets/images/image-solution-inside.svg';
import img14 from './assets/images/image-solution-outside.svg';
import img15 from './assets/images/week1-image-1.svg';
import img16 from './assets/images/week1-image-2.svg';
import img17 from './assets/images/week1-logo.svg';
import img18 from './assets/images/week2-image-1.svg';
import img19 from './assets/images/week2-image-2.svg';
import img20 from './assets/images/week2-logo.svg';
import img21 from './assets/images/week3-image-1.svg';
import img22 from './assets/images/week3-image-2.svg';
import img23 from './assets/images/week3-logo.svg';
import img24 from './assets/images/arrow-right.svg';
import img25 from './assets/images/square.svg';
import img26 from './assets/images/報名時間-image.svg';
import img27 from './assets/images/登陸作品-image.svg';
import img28 from './assets/images/開賽時間-image.svg';
import img29 from './assets/images/額外競賽-image.svg';
import img30 from './assets/images/arrow_down.svg';
import img31 from './assets/images/挑戰流程-image-1.svg';
import img32 from './assets/images/挑戰流程-image-2.svg';
import img33 from './assets/images/挑戰流程-image-3.svg';
import img34 from './assets/images/獎項-star.svg';
import img35 from './assets/images/Vector 8.svg';
import img36 from './assets/images/Vector 9.svg';
import img37 from './assets/images/star_run.svg';
import img38 from './assets/images/贊助單位-Star.svg';
import img39 from './assets/images/贊助單位-logo-1.svg';
import img40 from './assets/images/贊助單位-logo-2.svg';
import img41 from './assets/images/贊助單位-logo-3.svg';
import img42 from './assets/images/大神分享-李明.png';
import img43 from './assets/images/大神分享-Leo.png';
import img44 from './assets/images/大神分享-邱繼緯.png';
import img45 from './assets/images/大神分享-吳哲宇.png';
import img46 from './assets/images/常見問題-image.svg';
import img47 from './assets/images/final-CTA-image.svg';
import img48 from './assets/images/Star 9.svg';
import img49 from './assets/images/button-arrow.svg';
