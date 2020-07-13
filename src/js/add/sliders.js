import { closeSidebar } from "./sidebar.js";

const tablet = window.matchMedia("(min-width: 768px)");
const activeClasses = document.querySelectorAll(".slide");

let pricesSwiper = new Swiper('.prices__container', {
  pagination: {
    el: '.prices__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  loop: true,
  init: false
})

let brandSwiper = new Swiper('.brands__container', {
  pagination: {
    el: '.brands__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  init: false
})

let techSwiper = new Swiper('.tech__container', {
  pagination: {
    el: '.tech__pagination',
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 240,
  loop: true,
  init: false
})

const brandsShowAll = document.querySelector('.brands__show-all');
const techShowAll = document.querySelector('.tech__show-all');
let brandsListShown = false;
let techListShown = false;

const showTechButtonOn = function () {
  techListShown = true;
  document.querySelector(".tech__show-all > .show-all__img").style.transform = "rotate(180deg)";
  document.querySelector(".tech__show-all > .show-all__text").textContent = "Скрыть";
  document.querySelector(".tech__wrapper").style.height = "100%";
}

const showTechButtonOff = function () {
  techListShown = false;
  document.querySelector(".tech__show-all > .show-all__img").style.transform = "rotate(0deg)";
  document.querySelector(".tech__show-all > .show-all__text").textContent = "Показать все";
  document.querySelector(".tech__wrapper").style.height = "160px";
}

const showBrandsButtonOn = function () {
  brandsListShown = true;
  document.querySelector(".brands__show-all > .show-all__img").style.transform = "rotate(180deg)";
  document.querySelector(".brands__show-all > .show-all__text").textContent = "Скрыть";
  document.querySelector(".brands__wrapper").style.height = "100%";
}

const showBrandsButtonOff = function () {
  brandsListShown = false;
  document.querySelector(".brands__show-all > .show-all__img").style.transform = "rotate(0deg)";
  document.querySelector(".brands__show-all > .show-all__text").textContent = "Показать все";
  document.querySelector(".brands__wrapper").style.height = "160px";
}

techShowAll.addEventListener('click', function () {
  if (!techListShown) {
    showTechButtonOn();
  } else {
    showTechButtonOff();
  }
});

brandsShowAll.addEventListener('click', function () {
  if (!brandsListShown) {
    showBrandsButtonOn();
  } else {
    showBrandsButtonOff();
  }
});

for (let i = 0; i < activeClasses.length; i++) {
  if (!tablet.matches) {
    brandSwiper.init();
    techSwiper.init();
    pricesSwiper.init();
  }
}

tablet.addListener(e => {
  for (let i = 0; i < activeClasses.length; i++) {
    if (e.matches) {
      activeClasses[i].classList.remove('swiper-slide');
      closeSidebar();
      brandSwiper.destroy();
      techSwiper.destroy();
      pricesSwiper.destroy();
    } else {
      activeClasses[i].classList.add('swiper-slide');
      brandSwiper.init();
      techSwiper.init();
      pricesSwiper.init();
    }
  }
});
