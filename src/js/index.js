$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
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
let mobileMenuOpen = false;
let searching = false;

window.addEventListener('scroll', function(){
  if (window.scrollY > 0) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed')
  }
})

burger.addEventListener('click', function() {

  mobileMenu.classList.toggle('header__mobile--active');

  document.body.style.paddingRight = `${getScrollBarWidth()}px`;
  document.documentElement.style.overflow = "hidden";

})

document.querySelector('body').addEventListener('click', function(e) {

    if(!e.target === mobileMenu && mobileMenu.children) {
      console.log('hello')
    }
}) 




if (mobileMenuOpen === true) {
  disableScroll();
} else {
  window.onscroll = function() {};
}

function getScrollBarWidth() {
  const item = document.createElement('div');

  item.style.position = "absolute";
  item.style.top = "-99999px";
  item.style.width = "50px";
  item.style.height = "50px";
  item.style.overflow = "scroll";
  item.style.visibility = "hidden";

  document.body.appendChild(item);
  const scrollBarWidth = item.offsetWidth - item.clientWidth;
  document.body.removeChild(item);

  return scrollBarWidth;
}
