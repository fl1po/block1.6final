import "./modal";
import { desktop, sidebarShown, main } from "../index.js";

export const sidebar = document.querySelector('.sidebar');
const blurredSpace = document.querySelector('.blurred-space');
const sidebarCloseButton = document.querySelector('.sidebar__close-button');
const burgerButton = document.querySelectorAll('.burger-button');

export const closeSidebar = function () {
  if (!desktop.matches) {
    event.preventDefault();
    sidebar.style.transform = "translateX(0px)";
    main.style.filter = "opacity(1)";
    let sidebarShown = false;
    blurredSpace.style.display = "none";
    blurredSpace.style.zIndex = "2";
  }
}

document.querySelectorAll('.burger-button').forEach(burgerButton => {
  burgerButton.addEventListener('click', function () {
    event.preventDefault();
    if (!sidebarShown) {
      sidebar.style.transform = "translateX(340px)";
      sidebar.style.display = "block";
      let sidebarShown = true;
      main.style.filter = "opacity(0.8)";
      blurredSpace.style.display = "block";
    }
  });
});

sidebarCloseButton.addEventListener('click', function () {
  closeSidebar();
  blurredSpace.style.zIndex = "2";
});

blurredSpace.addEventListener('click', function () {
  closeSidebar();
  blurredSpace.style.zIndex = "2";
});
