import { desktop, sidebarShown, blurredSpace } from "../index.js";
import { closeFeedbackModal, closeCallModal } from "./modal.js";

const sidebar = document.querySelector('.sidebar');
const sidebarCloseButton = document.querySelector('.sidebar__close-button');
const burgerButton = document.querySelectorAll('.burger-button');

// close sidebar
export const closeSidebar = function () {
  if (!desktop.matches) {
    event.preventDefault();
    sidebar.style.transform = "translateX(0px)";
    main.style.filter = "opacity(1)";
    sidebarShown = false;
    blurredSpace.style.display = "none";
    blurredSpace.style.zIndex = "2";
  }
}
// open sidebar
document.querySelectorAll('.burger-button').forEach(burgerButton => {
  burgerButton.addEventListener('click', function () {
    event.preventDefault();
    if (!sidebarShown) {
      sidebar.style.transform = "translateX(340px)";
      sidebar.style.display = "block";
      sidebarShown = true;
      main.style.filter = "opacity(0.8)";
      blurredSpace.style.display = "block";
    }
  });
})
// close sidebar on click
sidebarCloseButton.addEventListener('click', function () {
  closeSidebar();
  blurredSpace.style.zIndex = "2";
})

blurredSpace.addEventListener('click', function () {
  closeFeedbackModal();
  closeCallModal();
  closeSidebar();
  blurredSpace.style.zIndex = "2";
})
