const closePopup = function () {
  const popupIsOpened = document.querySelector('.popup_is-opened');
  if (popupIsOpened) {
    popupIsOpened.classList.remove('popup_is-opened');
    document.removeEventListener("keydown", closePopupPressOnEsc);
  }
};

const closePopupPressOnEsc = (event) => {
  if (event.key === "Escape") {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    if (popupIsOpened) {
      closePopup();
    }
  }
}

const openPopup = (popup) => {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupPressOnEsc);

};

export {closePopup, closePopupPressOnEsc, openPopup}