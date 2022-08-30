$(document).ready(function () {
});


window.onload = function () {
  new Swiper('.sw-news', {
  spaceBetween: 50,
  slidesPerView: "auto",
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: '.news_next',
    prevEl: '.news_prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
	});
};