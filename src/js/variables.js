const callButton = document.querySelectorAll('.button__call');
const callModal = document.querySelector('.call');
const callCloseButton = document.querySelector('.call__close-button');
let modalCallShown = false;

const closeCallModal = function () {
  event.preventDefault();
  callModal.style.transform = "translateX(460px)";
  if (!desktop.matches) { sidebar.style.transform = "translateX(0px)"; }
  callCloseButton.style.filter = "opacity(0)";
  blurredSpace.style.zIndex = "2";
  modalCallShown = false;
  sidebarShown = false;
  if (!sidebarShown) {
    main.style.filter = "opacity(1)";
    blurredSpace.style.display = "none";
  }
}
