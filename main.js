document.addEventListener('DOMContentLoaded', function () {
  // Get the actual viewport height
let vh = window.innerHeight * 0.01;

// Set the value in the --vh custom property
document.documentElement.style.setProperty('--vh', `${vh}px`);
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  const awardContainer = document.querySelector('.award-container');
  const awards = document.querySelectorAll('.award');

  // Clone the awards and append them to the container
  awards.forEach(award => {
    const clone = award.cloneNode(true);
    awardContainer.appendChild(clone);
  });

  let scrollAmount = 0;
  let scrollInterval;

  const scrollContent = () => {
    scrollAmount++;
    if (scrollAmount >= awardContainer.scrollHeight / 2) {
      scrollAmount = 0;
    }
    awardContainer.scrollTop = scrollAmount;
  };

  // Function to start the scrolling
  const startScrolling = () => {
    scrollInterval = setInterval(scrollContent, 20);
  };

  // Function to stop the scrolling
  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  // Start scrolling when the page loads
  startScrolling();

  // Stop scrolling when hovering over the awards
  awardContainer.addEventListener('mouseover', stopScrolling);

  // Restart scrolling when not hovering over the awards
  awardContainer.addEventListener('mouseout', startScrolling);
});
