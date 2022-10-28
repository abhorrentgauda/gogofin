import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const sliderPrice = document.querySelector('.section-price__swiper');
const priceExpand = sliderPrice.querySelector('.section-button--slider');
const priceCards = sliderPrice.querySelector('.section-brands__cards');

export default function mobileSliderPrice() {
  if (window.innerWidth < 768) {
    const mySwiper = new Swiper(sliderPrice, {
      slidesPerView: 'auto',
      loop: true,
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },

    });

    sliderPrice.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    sliderPrice.dataset.mobile = 'false';
    if (sliderPrice.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}
