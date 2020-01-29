import '../styles/styles.css';

if (module.hot) {
  module.hot.accept();
}

let sliderImages = document.querySelectorAll('.slider-backg__slide'),
  arrowForward = document.querySelector('.arrow-slider'),
  current = 0;

// clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

//init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

//show next
function slideForward() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

//arrow click
arrowForward.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideForward();
});
