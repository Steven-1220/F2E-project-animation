import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import AOS from 'aos';
AOS.init();

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to('.typing', {
  text: '網頁設計',
  duration: 3,
  repeat: -1,
});

gsap.to('.loop', {
  x: -1000,
  ease: 'none',
  duration: 10,
  repeat: -1,
});

const topicMainCard = document.querySelector('.main-card-content');

// ScrollTrigger.create({
//   trigger: topicMainCard,
//   markers: true,
//   end: 'top 12%',
//   scrub: true,
//   onEnter: function () {
//     animate(topicMainCard);
//   },
//   onEnterBack: function () {
//     animate(topicMainCard);
//   },
// });

// function animate(el) {
//   gsap.set(topicMainCard, { xPercent: 85 });
//   const t1 = gsap.timeline();
//   t1.to(el, {
//     xPercent: 40,
//     duration: 1,
//   }).to(el, {
//     xPercent: 0,
//     duration: 1,
//   });
// }

gsap.set(topicMainCard, { xPercent: 85 });
let time = gsap.timeline({
  scrollTrigger: {
    trigger: topicMainCard,
    // markers: true,
    start: 'top 60%',
    end: 'top 10%',
    scrub: true,
  },
});

time
  .to(topicMainCard, {
    xPercent: 40,
    duration: 50,
    ease: 'expo',
    overwrite: 'auto',
  })
  .to(topicMainCard, {
    xPercent: 0,
    duration: 50,
    ease: 'expo',
    overwrite: 'auto',
  });
