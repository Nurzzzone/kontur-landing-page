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
const searchInput = document.querySelector('#search-input');
const orderBtn = document.querySelector('#order-btn');
const logo = document.querySelector('.header__logo');


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

  if (e.target.closest('#search-input')) {
    return
  } else {
    document.querySelector('#input-close-btn').classList.remove('input-search__close--active');
    header.classList.remove('header--active');
    document.querySelector('.header__right').style.display = "flex"
    searchInput.style.width = 250 + "px";
    headerInfo.style.paddingTop = '';
    headerInfo.style.paddingBottom = '';
  }
})

// Display close button and active header
const headerInfo = document.querySelector('#header-info');
const headerInput = document.querySelector('.header__input');
let width = orderBtn.offsetHeight - headerInput.offsetHeight;

searchInput.addEventListener('focus', function() {
  document.querySelector('#input-close-btn').classList.add('input-search__close--active');
  document.querySelector('.header__right').style.display = "none"
  header.classList.add('header--active');
  searchInput.style.width = 450 + "px";
  headerInfo.style.paddingTop = width/2 - 1 + 'px';
  headerInfo.style.paddingBottom = width/2 - 1 + 'px';
})
