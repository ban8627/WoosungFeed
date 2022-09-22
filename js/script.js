$(document).ready(function () {
  let gnb = $(".gnb");
  let act = $(".act");
  let subMenu = $(".drop-menu");
  let dropHideTimer;
  gnb.mouseenter(() => {
    clearTimeout(dropHideTimer);
    act.addClass("active");
    subMenu.stop().slideDown();
  });
  gnb.mouseleave(() => {
    act.removeClass("active");
    dropHideTimer = setTimeout(() => {
      subMenu.css("display", "none");
    });
  });
  subMenu.mouseenter(() => {
    clearTimeout(dropHideTimer);
    act.addClass("active");
  });
  subMenu.mouseleave(() => {
    dropHideTimer = setTimeout(() => {
      subMenu.css("display", "none");
    });
    act.removeClass("active");
  });

  // family-site
  let fSiteBt = $(".family-site > a");
  let fSiteList = $(".family-site > ul");
  fSiteBt.click((event) => {
    event.preventDefault();
    fSiteList.stop().slideToggle();
  });

  // sustain bg
  $(".sustain-bg").waypoint(function () {
    $(this).toggleClass("active");
  });

  // innovative bg
  $(".innovative").waypoint(function () {
    $(".innovative .bg-pic").toggleClass("active");
  });
  // innovative bg
  $(".merit").waypoint(function () {
    $(".merit > div").toggleClass("active");
  });

  // news slide
  let swNews = new Swiper(".sw-news", {
    spaceBetween: 50,
    slidesPerView: "auto",
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".news-next",
      prevEl: ".news-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      type: "fraction",
      el: ".swiper-pagination",
    },
  });

  let newsBt = $(".news-play-bt");
  newsBt.click(() => {
    let temp = newsBt.find("i").hasClass("fa-pause");
    if (temp == true) {
      swNews.autoplay.stop();
      newsBt.find("i").removeClass("fa-pause").addClass("fa-play");
    } else {
      swNews.autoplay.start();
      newsBt.find("i").removeClass("fa-play").addClass("fa-pause");
    }
  });

  // ws-active bg
  $(".ws-active").waypoint(function () {
    $(".video-content").toggleClass("active");
  });

  // contri slide
  let swContri = new Swiper(".sw-contri", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  // recruit bg
  $(".recruit").waypoint(function () {
    $(".recruit-bg").toggleClass("active");
  });
});

window.onload = function () {
  AOS.init();

  $(window).bind("wheel", function (event) {
    let temp = document.getElementById("header");
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
      temp.style.top = 0;
      gnb.classList += "active";
    } else {
      temp.style.top = "-100%";
      gnb.classList.remove = "active";
    }
  });
};
