import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const sliderTech = document.querySelector('.section-tech__swiper');
const techExpand = sliderTech.querySelector('.section-button--slider');
const techCards = sliderTech.querySelector('.section-tech__cards');

export default function mobileSliderTech() {
  if (window.innerWidth < 768) {
    const mySwiper = new Swiper(sliderTech, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },

    });

    sliderTech.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    sliderTech.dataset.mobile = 'false';
    if (sliderTech.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

techExpand.addEventListener('click', function (evt) {
  evt.preventDefault();

  techCards.style.maxHeight = '100%';
  techExpand.textContent = 'Скрыть';
  if (sliderTech.querySelector('.opened') === null) {
    techExpand.classList.add('opened');
    techExpand.classList.remove('section-button--before');
    techExpand.classList.add('section-button--before--rotate');
  } else {
    techCards.style.maxHeight = '160px';
    techExpand.textContent = 'Показать все';
    techExpand.classList.remove('opened');
    techExpand.classList.remove('section-button--before--rotate');
    techExpand.classList.add('section-button--before')
  }
});
