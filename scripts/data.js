// --Section Profile--
const profileTitleElement = document.querySelector(".profile__title");
const profileSubtitleElement = document.querySelector(".profile__subtitle");
const popupEditButtonElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");

// --Popup Elements--
const popupElements = document.querySelectorAll(".popup");
const popupCloseButtonElements = document.querySelectorAll(".popup__close-button");

// --Edit Popup--
const popupEditSectionElement = document.querySelector(".popup-edit-profile"); // Находим секцию "Редактирование профиля".
const popupEditFormElement = popupEditSectionElement.querySelector(".popup__container");
const popupEditNameInputElement = popupEditSectionElement.querySelector(".popup__text-input_type_name");
const popupEditAboutInputElement = popupEditSectionElement.querySelector(".popup__text-input_type_about");

// --Add Popup--
const popupAddSectionElement = document.querySelector(".popup-add-card");
const popupAddFormElement = popupAddSectionElement.querySelector(".popup__container");
const popupAddTitleInputElement = popupAddFormElement.querySelector(".popup__text-input_type_title");
const popupAddLinkTitleInputElement = popupAddFormElement.querySelector(".popup__text-input_type_link");

/* --Gallery-- */
const photoGalleryItemTemplateElement = document.querySelector(".photo-gallery__item-template");
const cardListSelector = ".photo-gallery__list";

/* Popup Image */
const popupImageSectionElement = document.querySelector('.image-zoom');
const popupImageContainerElement = popupImageSectionElement.querySelector('.image-zoom__container');
const popupImageElement = popupImageContainerElement.querySelector('.image-zoom__image');
const popupCaptionElement = popupImageContainerElement.querySelector('.image-zoom__caption');

/* Массив карточек */
const cardItems = [{
  name: "Карелия", link: "./images/photo-1.jpg",
}, {
  name: "Санкт-Петербург", link: "./images/photo-2.jpg",
}, {
  name: "Иваново", link: "./images/photo-3.jpg",
}, {
  name: "Петрозаводск", link: "./images/photo-4.jpg",
}, {
  name: "Пётр 1", link: "./images/photo-5.jpg",
}, {
  name: "Кисловодск", link: "./images/photo-6.jpg",
}];

const cardComponents = {
  likeButton: '.photo-gallery__like-button',
  deleteButton: '.photo-gallery__delete-button',
  cardImage: '.photo-gallery__image'
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
  profileTitleElement,
  profileSubtitleElement,
  popupEditButtonElement,
  popupAddButtonElement,

  popupElements,
  popupCloseButtonElements,

  popupEditSectionElement,
  popupEditFormElement,
  popupEditNameInputElement,
  popupEditAboutInputElement,

  popupAddSectionElement,
  popupAddFormElement,
  popupAddTitleInputElement,
  popupAddLinkTitleInputElement,

  photoGalleryItemTemplateElement,
  cardListSelector,
  popupImageSectionElement, 
  popupImageElement, 
  popupCaptionElement,
  
  cardItems,
  cardComponents,
  formComponents
};