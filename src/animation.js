import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import AOS from 'aos';
AOS.init();

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// 自動打字效果
gsap.to('.typing', {
  text: '網頁設計',
  duration: 3,
  repeat: -1,
});

// 跑馬燈
gsap.to('.loop', {
  x: -1000,
  ease: 'none',
  duration: 10,
  repeat: -1,
});

const topicMainCard = document.querySelector('.main-card-content');

// 三大主題區塊由右向左分段移入
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

let mm = gsap.matchMedia();

mm.add('(min-width: 768px)', () => {
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
});

mm.add('(max-width: 767px)', () => {
  time.to(topicMainCard, {
    xPercent: 24,
    duration: 50,
    ease: 'expo',
    overwrite: 'auto',
  });
});

mm.add('(max-width: 375px)', () => {
  time.to(topicMainCard, {
    xPercent: 15,
    duration: 50,
    ease: 'expo',
    overwrite: 'auto',
  });
});
