$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    mouseDrag: false,
    smartSpeed: 1200,
    center: true,
    dots: false,
  });
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile');
const header = document.querySelector('#header');
const searchInput = document.querySelector('#search-input')
let searching = false;

// Add fixed header on scroll
window.addEventListener('scroll', function(){
  if (window.scrollY > 0) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed')
  }
})

// Open Mobile Menu on click
burger.addEventListener('click', function() {
  mobileMenu.classList.toggle('header__mobile--active');
})

// Close Mobile Menu on click outside
document.addEventListener('click', function(e) {
  if (e.target.closest('.burger') || e.target.closest('.header__mobile')) {
    return
  } else {
    mobileMenu.classList.remove('header__mobile--active');
  }
})

// searchInput.addEventListener('click', function() {
//   document.querySelector('.header__right').style.display = "none";
//   header.style.backgroundColor = "black";
// })


