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
const popupAddSectionSelector = ".popup-add-card";

// --Delete Card Popup--
const popupDeleteCardSelector = ".popup-delete-card";

/* --Gallery-- */
const photoGalleryItemTemplateSelector = ".photo-gallery__item-template";
const cardListSelector = ".photo-gallery__list";

/* Popup Image */
const popupImageSectionSelector = '.image-zoom';

const cardComponents = {
  likeSelector: '.photo-gallery__like-button',
  deleteSelector: '.photo-gallery__delete-button',
  cardImageSelector: '.photo-gallery__image',
  titleSelector: '.photo-gallery__title',
  likeCounterSelector: '.photo-gallery__like-counter'
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

  popupAddSectionSelector,
  popupDeleteCardSelector,

  photoGalleryItemTemplateSelector,
  cardListSelector,
  popupImageSectionSelector,

  cardComponents,
  formComponents
};