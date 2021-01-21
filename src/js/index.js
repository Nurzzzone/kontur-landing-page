$(document).ready(function(){
  // Owl-Carousel Home Section
  $(".home__items").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    mouseDrag: false,
    smartSpeed: 1200,
    center: true,
    dots: false,
  });

  // click to scroll to top
  $('.scroll-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  })

});


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile');
const header = document.querySelector('#header');
const searchInput = document.querySelector('#search-input');
const orderBtn = document.querySelector('#order-btn');
const logo = document.querySelector('.header__logo');
const scrollToTop = document.querySelector('.scroll-top');


window.addEventListener('scroll', function(){
  const scroll = window.pageYOffset;

  // Add fixed header on scroll
  if (scroll > 0) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed')
  }

  // Scroll to top button
  if (scroll > header.offsetHeight) {
    scrollToTop.classList.add('scroll-top--active');
  } else {
    scrollToTop.classList.remove('scroll-top--active');
  }
})


// Open Mobile Menu on click
burger.addEventListener('click', function() {
  mobileMenu.classList.toggle('header__mobile--active');
})


document.addEventListener('click', function(e) {
  // Close Mobile Menu on click outside
  if (e.target.closest('.burger') || e.target.closest('.header__mobile')) {
    return
  } else {
    mobileMenu.classList.remove('header__mobile--active');
  }

  // Stop searching on click outside
  if (e.target.closest('#search-input')) {
    return
  } else {
    document.querySelector('#input-close-btn').classList.remove('input-search__close--active');
    header.classList.remove('header--active');
    document.querySelector('.header__right').classList.remove('header__right--closed');
    document.querySelector('.header__nav').classList.remove('header__nav--closed');
    searchInput.style.width = 250 + "px";
    headerInfo.style.paddingTop = '';
    headerInfo.style.paddingBottom = '';
  }
})

// Display close button and active header
const headerInfo = document.querySelector('#header-info');
const headerInput = document.querySelector('.header__input');
let width = orderBtn.offsetHeight - headerInput.offsetHeight;

// Change header on input click
searchInput.addEventListener('click', function() {
  document.querySelector('#input-close-btn').classList.add('input-search__close--active');
  document.querySelector('.header__nav').classList.add('header__nav--closed');
  document.querySelector('.header__right').classList.add('header__right--closed');
  header.classList.add('header--active');
  headerInfo.style.paddingTop = width/2 - 1 + 'px';
  headerInfo.style.paddingBottom = width/2 - 1 + 'px';

  if (window.innerWidth > 1366) {
    searchInput.style.width = 1100 + "px";
  } 
  if (window.innerWidth <= 1366) {
    searchInput.style.width = 550 + "px";
  } 
})