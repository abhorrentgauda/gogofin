const headerMenuButton = document.querySelector('.header__button--menu');
const sidebar = document.querySelector('.sidebar');
const sidebarMenuButton = sidebar.querySelector('.sidebar__button--menu');

headerMenuButton.addEventListener('click', function () {

  sidebar.style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('main').style.opacity = '0.07';
  document.querySelector('.header').style.opacity = '0.07';
});

sidebarMenuButton.addEventListener('click', function () {


  document.querySelector('.blur').style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
  document.querySelector('main').style.opacity = '1';
  document.querySelector('.header').style.opacity = '1';

  if (window.innerWidth < 1366) {

    sidebar.style.display = 'none';
  }

});

document.addEventListener('click', function(e) {

  if (e.target.className.includes('blur')) {

    document.querySelector('.blur').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('main').style.opacity = '1';
    document.querySelector('.header').style.opacity = '1';

    if (window.innerWidth < 1366) {

      sidebar.style.display = 'none';
    }
  }


});
