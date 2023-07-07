// Description: Main JS file for the website
// const images = import.meta.glob('./img/*.jpg')

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
