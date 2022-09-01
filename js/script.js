$(document).ready(function () {
  let gnb = $('.gnb');
  let hInner = $('.header > .inner');
  let logo = $('.logo');
  let quickBt = $('.quick-bt');
  let siteMap = $('.site-map');
  let subMenu = $('.drop-menu');

  gnb.mouseenter(() => {
    logo.addClass('active');
    hInner.addClass('active');
    quickBt.addClass('active');
    siteMap.addClass('active');
    subMenu.stop().slideDown();
  });
  gnb.mouseleave(() => {
    logo.removeClass('active');
    hInner.removeClass('active');
    quickBt.removeClass('active');
    siteMap.removeClass('active');
    subMenu.stop().slideUp();
  })

  // family-site
  let fSiteBt = $('.family-site > a');
  let fSiteList = $('.family-site > ul');
  fSiteBt.click((event) => {
    event.preventDefault();
    fSiteList.stop().slideToggle();
  })
});


window.onload = function () {
  let swNews = new Swiper('.sw-news', {
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
  
  let swContri = new Swiper('.sw-contri', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction:false
    }
  })
};