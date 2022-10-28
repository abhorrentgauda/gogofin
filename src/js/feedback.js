const sidebar = document.querySelector('.sidebar');
const sidebarFeedbackButton = sidebar.querySelector('.sidebar__button--chat');
const headerFeedbackButton = document.querySelector('.header__button--chat');
const feedback = document.querySelector('.feedback');
const feedbackMenuButton = feedback.querySelector('.feedback__button--menu');


sidebarFeedbackButton.addEventListener('click', function () {

  feedback.style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
  document.querySelector('.blur').style.zIndex = '5';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('main').style.opacity = '0.07';
  document.querySelector('.header').style.opacity = '0.07';
  sidebar.style.opacity = '0.07';
});

headerFeedbackButton.addEventListener('click', function () {

  feedback.style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('main').style.opacity = '0.07';
  document.querySelector('.header').style.opacity = '0.07';
  sidebar.style.opacity = '0.07';
});

feedbackMenuButton.addEventListener('click', function () {

  feedback.style.display = 'none';
  document.querySelector('.blur').style.zIndex = '3';
  document.querySelector('.blur').style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
  document.querySelector('main').style.opacity = '1';
  document.querySelector('.header').style.opacity = '1';
  sidebar.style.opacity = '1';
});

document.addEventListener('click', function(e) {

  if (e.target.className.includes('blur')) {

    feedback.style.display = 'none';
    document.querySelector('.blur').style.zIndex = '3';
    document.querySelector('.blur').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('main').style.opacity = '1';
    document.querySelector('.header').style.opacity = '1';
    sidebar.style.opacity = '1';
  }


});
