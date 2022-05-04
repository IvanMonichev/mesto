import photo1 from "../images/photo-1.jpg";
import photo2 from "../images/photo-2.jpg";
import photo3 from "../images/photo-3.jpg";
import photo4 from "../images/photo-4.jpg";
import photo5 from "../images/photo-5.jpg";
import photo6 from "../images/photo-6.jpg";

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
  name: "Карелия", link: photo1,
}, {
  name: "Санкт-Петербург", link: photo2,
}, {
  name: "Иваново", link: photo3,
}, {
  name: "Петрозаводск", link: photo4,
}, {
  name: "Пётр 1", link: photo5,
}, {
  name: "Кисловодск", link: photo6,
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