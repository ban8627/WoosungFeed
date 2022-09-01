$(document).ready(function () {
  let gnb = $('.gnb');
  let act = $('.act')
  let subMenu = $('.drop-menu');
  let dropHideTimer;


  gnb.mouseenter(() => {
    clearTimeout(dropHideTimer);
    act.addClass('active');
    subMenu.stop().slideDown();

  });
  gnb.mouseleave(() => {
    act.removeClass('active');
    dropHideTimer = setTimeout( () => {
      subMenu.css('display','none')
    });
  });
  subMenu.mouseenter(()=>{
    clearTimeout(dropHideTimer);
    act.addClass('active');
  })
  subMenu.mouseleave(()=>{
    dropHideTimer = setTimeout( () => {
      subMenu.css('display','none')
    });
    act.removeClass('active');
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
  AOS.init();
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