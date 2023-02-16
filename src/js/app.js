// import Swiper, {
//   Navigation,
//   Pagination,
//   Thumbs,
//   Controller,
//   Autoplay,
// } from "swiper";
// Swiper.use([Navigation, Pagination, Thumbs, Controller, Autoplay]);
import Headroom from "headroom.js";
const APP = {
  initLinks() {
    Array.from(document.querySelectorAll(".link")).forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("html").classList.remove("no-scroll");
        document.querySelector(".mobile-nav").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("is-active");
        Array.from(document.querySelectorAll(".link.active")).forEach(function (link) {
          link.classList.remove("active");
        });
        item.classList.add("active");
        scrollTo({
          top: document.querySelector(item.getAttribute("href")).offsetTop,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  },
  initHeadRoom() {
    var headroom = new Headroom(document.querySelector(".top-panel"));
    headroom.init();
  },
  initHamburger() {
    const $hamburger = document.querySelector(".hamburger");
    const $mobileNav = document.querySelector(".mobile-nav");
    $hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("html").classList.toggle("no-scroll");
      $hamburger.classList.toggle("is-active");
      $mobileNav.classList.toggle("active");
    });
  },
  initSwiper() {
    Array.from(document.querySelectorAll(".swiper")).forEach((swiper) => {
      const deafultOptions = {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          autoplay: true,
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      };

      const customOptions = JSON.parse(swiper.dataset.options);

      const options = Object.assign(deafultOptions, customOptions);

      new Swiper(swiper, options);
    });
  },
  initTabs() {
    const $tabs = document.querySelectorAll(".tabs");
    [...$tabs].forEach(($item) => {
      [...$item.querySelectorAll(".tab-toggle")].forEach(($toggle) => {
        $toggle.addEventListener("click", (event) => {
          event.preventDefault();
          [...document.querySelectorAll(".tab-toggle.active")].forEach(($toggleActive) => {
            $toggleActive.classList.remove("active");
          });
          const $activeToggle = $item.querySelector(".tab-toggle.active");
          if ($activeToggle) {
            $activeToggle.classList.remove("active");
          }
          const $activeTab = document.querySelectorAll(".tabs__wrapper__item.active-tab");
          [...$activeTab].forEach((item) => {
            if (item) {
              item.classList.remove("active-tab");
              item.classList.add("hidden-tab");
            }
          });

          const currentTab = document.querySelector($toggle.getAttribute("href"));
          currentTab.classList.add("active-tab");
          currentTab.classList.remove("hidden-tab");
          $toggle.classList.add("active");
        });
      });
    });
  },
  initLoadMore() {
    const $article = document.querySelectorAll(".article");
    // const $btn = document.querySelector(".btn-article");
    let currentArticle = 3;
    [...document.querySelectorAll(".load-more")].forEach(($item) => {
      $item.addEventListener("click", function (e) {
        console.log("adasd");
        for (var i = currentArticle; i < currentArticle + 3; i++) {
          if ($article[i]) {
            $article[i].classList.add("show");
          }
        }
        currentArticle += 3;
      });
    });
  },
  initAudio() {
    // if (document.querySelector(".index")) {
    //   const el = document.getElementById("btn-play-dry");
    //   const playing = false; // текущее состояние плеера
    //   const player = new Audio("/audio/dry.mp3");
    //   player.preload = "auto";
    //   player.addEventListener("ended", function () {
    //     // слушаем окончание трека
    //     // document.querySelector(".text-dry").innerText =
    //     //   "Прислушайтесь как звучит сухой кашель";
    //     document.querySelector(".btn-play.dry").classList.remove("hidden");
    //     document.querySelector(".btn-pause.dry").classList.add("hidden");
    //     playing = false;
    //   });
    //   el.addEventListener("click", playPause); // слушаем нажатие на кнопку
    //   function playPause() {
    //     if (playing) {
    //       player.pause();
    //       document.querySelector(".text-dry").innerText = "Paused";
    //     } else {
    //       player.play();
    //       document.querySelector(".btn-play.dry").classList.add("hidden");
    //       document.querySelector(".btn-pause.dry").classList.remove("hidden");
    //       // document.querySelector(".text-dry").innerText = "Playing..";
    //       // el.innerText = "Playing..";
    //     }
    //     playing = !playing;
    //   }
    //   const el2 = document.getElementById("btn-play-wet");
    //   const playing2 = false; // текущее состояние плеера
    //   const player2 = new Audio("/audio/wet.mp3");
    //   player2.preload = "auto";
    //   player2.addEventListener("ended", function () {
    //     // слушаем окончание трека
    //     document.querySelector(".btn-play.wet").classList.remove("hidden");
    //     document.querySelector(".btn-pause.wet").classList.add("hidden");
    //     playing2 = false;
    //   });
    //   el2.addEventListener("click", playPause2); // слушаем нажатие на кнопку
    //   function playPause2() {
    //     if (playing2) {
    //       player2.pause();
    //       document.querySelector(".text-wet").innerText = "Paused";
    //     } else {
    //       player2.play();
    //       document.querySelector(".btn-play.wet").classList.add("hidden");
    //       document.querySelector(".btn-pause.wet").classList.remove("hidden");
    //       // el.innerText = "Playing..";
    //     }
    //     playing2 = !playing2;
    //   }
    // }
    const $audioOne = document.getElementById("audio-1");
    const $btnOne = document.getElementById("btn-play-dry");
    $btnOne.addEventListener("click", togglePlay);
    function togglePlay() {
      return $audioOne.paused ? $audioOne.play() : $audioOne.pause();
    }
    $btnOne.addEventListener("click", () => {
      document.querySelector(".btn-play.dry").classList.toggle("hidden");
      document.querySelector(".btn-pause.dry").classList.toggle("hidden");
    });
    const $audioTwo = document.getElementById("audio-2");
    const $btnTwo = document.getElementById("btn-play-wet");
    $btnTwo.addEventListener("click", togglePlayTwo);
    function togglePlayTwo() {
      return $audioTwo.paused ? $audioTwo.play() : $audioTwo.pause();
    }
    $btnTwo.addEventListener("click", () => {
      document.querySelector(".btn-play.wet").classList.toggle("hidden");
      document.querySelector(".btn-pause.wet").classList.toggle("hidden");
    });
    // if ($audioOne.paused) {
    //   console.log("pause");
    // document.querySelector(".btn-play.dry").classList.remove("hidden");
    // document.querySelector(".btn-pause.dry").classList.add("hidden");
    // }
  },
};
document.addEventListener("DOMContentLoaded", () => {
  //   APP.initSwiper();
  if (document.querySelector(".article-page")) {
    document.querySelector(".top-panel").classList.add("hidden");
    document.querySelector(".mobile-nav").classList.add("hidden");
  }
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector(".top-panel ").classList.add("bg");
    } else {
      document.querySelector(".top-panel ").classList.remove("bg");
    }
  });
  APP.initLinks();
  APP.initHeadRoom();
  APP.initHamburger();
  APP.initTabs();
  // APP.initLoadMore();
  APP.initAudio();
});
