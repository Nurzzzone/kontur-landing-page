$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 6000,
    mouseDrag: false,
    smartSpeed: 1200,
    center: true,
    dots: false,
  });
});

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.header__mobile')

burger.addEventListener('click', function() {
  mobileMenu.classList.toggle('header__mobile--active');
  console.log('hello')
})