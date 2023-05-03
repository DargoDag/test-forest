import { isWebp } from './modules/utils.js';
import './modules/lazyload.js';
import Swiper, { Pagination, Mousewheel } from 'swiper';

isWebp();

Swiper.use([Pagination, Mousewheel]);

let swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  spaceBetween: 30,
  effect: 'fade',
  mousewheel: true,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  runCallbacksOnInit: true
});

function change() {
  let currentSlide = document.getElementById('currentSlide');
  let slideLength = document.getElementById('slideLength');
  currentSlide.innerHTML = '0' + (swiper.realIndex + 1);
  slideLength.innerHTML = '0' + swiper.slides.length;

  if ((swiper.realIndex + 1) === swiper.slides.length) {
    slideLength.classList.add('active');
  } else {
    slideLength.classList.remove('active');
  }
}

change();

swiper.on('slideChange', change);

let toLastSlide = document.getElementById('arrow');

toLastSlide.addEventListener('click', function () {
  swiper.slideTo(5);
});
