const openPopup = (popup) => {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupPressOnEsc);

};

export {openPopup}