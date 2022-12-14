$(document).ready(function () {
  let gnb = $(".gnb");
  let act = $(".act");
  let subMenu = $(".drop-menu");
  let dropHideTimer;
  gnb.mouseenter(() => {
    clearTimeout(dropHideTimer);
    if (!act.hasClass("active")) {
      act.addClass("active");
    }
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
    if (!act.hasClass("active")) {
      act.addClass("active");
    }
  });
  subMenu.mouseleave(() => {
    dropHideTimer = setTimeout(() => {
      subMenu.css("display", "none");
      if ($("html").innerHeight < "300px") {
        act.removeClass("active");
      }
    });
  });
  $(() => {
    $("html,body").on("mousewheel DOMMouseScroll", (e) => {
      e.preventDefault();
      let mou = e.originalEvent;
      delta = 0;
      if (mou.detail) {
        delta = mou.detail * -40;
      } else {
        delta = mou.wheelDelta;
      }

      if (delta > 0) {
        act.addClass("active");
        $("#header").stop().animate(
          {
            top: 0,
          },
          1000
        );
      } else {
        $("#header").stop().animate(
          {
            top: "-150px",
          },
          500
        );
        act.addClass("active");
      }
    });
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
  // merit
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
};
