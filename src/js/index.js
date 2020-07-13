import "../scss/style.scss";
import "./sidebar/sidebar.js";
import "./modal/modal.js";
import "./sliders/sliders.js";

export const desktop = window.matchMedia("(min-width: 1120px)");
export let sidebarShown = false;
export const main = document.querySelector('.main');

const descShowAll = document.querySelector('.description__link');
const descTabletText = document.querySelector('.description__text--tabletplus');
const descTabletFullText = document.querySelector('.description__text--full');
const descFullText = document.querySelector('.description__text--all');

descShowAll.addEventListener('click', function () {
  descTabletText.style.display = "inline";
  descFullText.style.display = "inline";
  descTabletFullText.style.display = "inline";
  descShowAll.style.display = "none";
});
