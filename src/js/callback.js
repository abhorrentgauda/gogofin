const sidebar = document.querySelector('.sidebar');
const sidebarCallButton = sidebar.querySelector('.sidebar__button--call');
const headerCallButton = document.querySelector('.header__button--call');
const callback = document.querySelector('.callback');
const callbackMenuButton = callback.querySelector('.callback__button--menu');


sidebarCallButton.addEventListener('click', function () {

  callback.style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
  document.querySelector('.blur').style.zIndex = '5';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('main').style.opacity = '0.07';
  document.querySelector('.header').style.opacity = '0.07';
  sidebar.style.opacity = '0.07';
});

headerCallButton.addEventListener('click', function () {

  callback.style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('main').style.opacity = '0.07';
  document.querySelector('.header').style.opacity = '0.07';
  sidebar.style.opacity = '0.07';
});

callbackMenuButton.addEventListener('click', function () {

  callback.style.display = 'none';
  document.querySelector('.blur').style.display = 'none';
  document.querySelector('.blur').style.zIndex = '3';
  document.querySelector('body').style.overflow = 'auto';
  document.querySelector('main').style.opacity = '1';
  document.querySelector('.header').style.opacity = '1';
  sidebar.style.opacity = '1';
});

document.addEventListener('click', function(e) {

  if (e.target.className.includes('blur')) {

    callback.style.display = 'none';
    document.querySelector('.blur').style.zIndex = '3';
    document.querySelector('.blur').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('main').style.opacity = '1';
    document.querySelector('.header').style.opacity = '1';
    sidebar.style.opacity = '1';
  }


});
