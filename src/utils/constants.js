// --Section Profile--

const profileElements = {
  name: ".profile__title",
  about: ".profile__subtitle"
}

const popupEditButtonElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");

// --Edit Popup--
const popupEditSectionElement = ".popup-edit-profile";
const popupEditNameInput = document.querySelector(".popup__text-input_type_name");
const popupEditAboutInput = document.querySelector(".popup__text-input_type_about");


// --Add Popup--
const popupAddSectionElement = ".popup-add-card"
const popupAddFormElement = document.querySelector(".popup__container");

/* --Gallery-- */
const photoGalleryItemTemplateSelector = ".photo-gallery__item-template";
const cardListSelector = ".photo-gallery__list";

/* Popup Image */
const popupImageSectionElement = '.image-zoom';

/* Массив карточек */
const cardItems = [{
  name: "Карелия", link: 'https://i.ibb.co/s3xH25n/photo-1.jpg'
}, {
  name: "Санкт-Петербург", link:'https://i.ibb.co/h2ypx6c/photo-2.jpg'
}, {
  name: "Иваново", link: 'https://i.ibb.co/fGS9vHt/photo-3.jpg'
}, {
  name: "Петрозаводск", link: 'https://i.ibb.co/W27bJRL/photo-4.jpg'
}, {
  name: "Пётр 1", link: 'https://i.ibb.co/sQLQf57/photo-5.jpg'
}, {
  name: "Кисловодск", link: 'https://i.ibb.co/d2kcg4f/photo-6.jpg'
}];

const cardComponents = {
  likeSelector: '.photo-gallery__like-button',
  deleteSelector: '.photo-gallery__delete-button',
  cardImageSelector: '.photo-gallery__image',
  titleSelector: '.photo-gallery__title'
}

/* Validation */
const formComponents = {
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button-inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_visible'
}

export {
  profileElements,

  popupEditButtonElement,
  popupAddButtonElement,

  popupEditSectionElement,
  popupEditNameInput,
  popupEditAboutInput,

  popupAddSectionElement,
  popupAddFormElement,

  photoGalleryItemTemplateSelector,
  cardListSelector,
  popupImageSectionElement,

  cardItems,
  cardComponents,
  formComponents
};