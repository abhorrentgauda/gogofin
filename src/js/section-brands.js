import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const sliderBrands = document.querySelector('.section-brands__swiper');
const brandsExpand = sliderBrands.querySelector('.section-button--slider');
const brandCards = sliderBrands.querySelector('.section-brands__cards');

export default function mobileSliderBrands() {
  if (window.innerWidth < 768) {
    const mySwiper = new Swiper(sliderBrands, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },

    });

    sliderBrands.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    sliderBrands.dataset.mobile = 'false';
    if (sliderBrands.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}


brandsExpand.addEventListener('click', function (event) {
  event.preventDefault();

  brandCards.style.maxHeight = '100%';
  brandsExpand.textContent = 'Скрыть';
  if (sliderBrands.querySelector('.opened') === null) {
    brandsExpand.classList.add('opened');
    brandsExpand.classList.remove('section-button--before');
    brandsExpand.classList.add('section-button--before--rotate');
  } else {
    brandCards.style.maxHeight = '160px';
    brandsExpand.textContent = 'Показать все';
    brandsExpand.classList.remove('opened');
    brandsExpand.classList.remove('section-button--before--rotate');
    brandsExpand.classList.add('section-button--before')
  }
});
