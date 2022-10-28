const sliderBrands = document.querySelector('.section-brands__swiper');
const sliderTech = document.querySelector('.section-tech__swiper');

function mobileSliderBrands() {
  if (window.innerWidth < 768 && sliderBrands.dataset.mobile == 'false') {
    mySwiper = new Swiper(sliderBrands, {
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

mobileSliderBrands()

window.addEventListener('resize', () => {
  mobileSliderBrands();
});


function mobileSliderTech() {
  if (window.innerWidth < 768 && sliderTech.dataset.mobile == 'false') {
    mySwiper = new Swiper(sliderTech, {
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

mobileSliderTech()

window.addEventListener('resize', () => {
  mobileSliderTech();
});

const brandsExpand = sliderBrands.querySelector('.section-button--slider');
const brandCards = sliderBrands.querySelector('.section-brands__cards');
const techExpand = sliderTech.querySelector('.section-button--slider');
const techCards = sliderTech.querySelector('.section-tech__cards');

brandsExpand.addEventListener('click', function (evt) {
  evt.preventDefault();

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