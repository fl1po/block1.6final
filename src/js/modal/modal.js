import { desktop, sidebarShown, main } from "../index.js";
import { closeSidebar, sidebar } from "../sidebar/sidebar.js";

const blurredSpace = document.querySelector('.blurred-space');
const callButton = document.querySelectorAll('.button__call');
const callModal = document.querySelector('.call');
const callCloseButton = document.querySelector('.call__close-button');
const feedbackButton = document.querySelectorAll('.button__chat');
const feedbackModal = document.querySelector('.feedback');
const feedBackCloseButton = document.querySelector('.feedback__close-button');

let modalCallShown = false;
let modalFeedbackShown = false;

const closeCallModal = function () {
  event.preventDefault();
  callModal.style.transform = "translateX(460px)";
  if (!desktop.matches) { sidebar.style.transform = "translateX(0px)"; }
  callCloseButton.style.filter = "opacity(0)";
  callCloseButton.style.transform = "translate(0px, 0px)";
  blurredSpace.style.zIndex = "2";
  let modalCallShown = false;
  let sidebarShown = false;
  if (!sidebarShown) {
    main.style.filter = "opacity(1)";
    blurredSpace.style.display = "none";
  }
}

const closeFeedbackModal = function () {
  event.preventDefault();
  feedbackModal.style.transform = "translateX(460px)";
  if (!desktop.matches) { sidebar.style.transform = "translateX(0px)"; }
  feedBackCloseButton.style.filter = "opacity(0)";
  feedBackCloseButton.style.transform = "translate(0px, 0px)";
  blurredSpace.style.zIndex = "2";
  let modalFeedbackShown = false;
  let sidebarShown = false;
  if (!sidebarShown) {
    main.style.filter = "opacity(1)";
    blurredSpace.style.display = "none";
  }
}

blurredSpace.addEventListener('click', function () {
  closeFeedbackModal();
  closeCallModal();
  closeSidebar();
  blurredSpace.style.zIndex = "2";
})

document.querySelectorAll('.button__call').forEach(feedbackButton => {
  feedbackButton.addEventListener('click', function () {
    event.preventDefault();
    closeSidebar();
    blurredSpace.style.zIndex = "4";
    if (!modalCallShown) {
      callModal.style.transform = "translateX(-460px)";
      callCloseButton.style.filter = "opacity(1)";
      if (desktop.matches) {
        callCloseButton.style.transform = "translate(-80px, 20px)";
      }
      let modalCallShown = true;
      main.style.filter = "opacity(0.8)";
      blurredSpace.style.display = "block";
    }
  });
})

callCloseButton.addEventListener('click', function () {
  closeCallModal();
})

document.querySelectorAll('.button__chat').forEach(feedbackButton => {
  feedbackButton.addEventListener('click', function () {
    event.preventDefault();
    closeSidebar();
    blurredSpace.style.zIndex = "4";
    if (!modalFeedbackShown) {
      feedbackModal.style.transform = "translateX(-460px)";
      feedBackCloseButton.style.filter = "opacity(1)";
      if (desktop.matches) {
        feedBackCloseButton.style.transform = "translate(-80px, 20px)";
      }
      let modalFeedbackShown = true;
      main.style.filter = "opacity(0.8)";
      blurredSpace.style.display = "block";
    }
  });
})

feedBackCloseButton.addEventListener('click', function () {
  closeFeedbackModal();
})
