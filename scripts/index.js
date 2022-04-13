import {
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
  cardList,
  cardItems,
  formComponents
} from './data.js';

import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {closePopup, openPopup} from "./utils.js"



const createCard = (templateElement, item) => {
  const card = new Card(templateElement, item);
  return card.generateCard();
}

const renderCard = (templateElement, item) => {
  cardList.prepend(createCard(templateElement, item));
}

// Создание карточек.
const renderCards = () => {
  cardItems.forEach((item) => {
    renderCard(photoGalleryItemTemplateElement, item);
  });
};

renderCards();

const generateValuesInputsEditPopup = () => {
  popupEditNameInputElement.value = profileTitleElement.textContent;
  popupEditAboutInputElement.value = profileSubtitleElement.textContent;
}

generateValuesInputsEditPopup();

// Установка валидации
const popupEditSectionValidation = new FormValidator(popupEditSectionElement, formComponents);
const popupAddSectionValidation = new FormValidator(popupAddSectionElement, formComponents);

popupEditSectionValidation.enableValidation();
popupAddSectionValidation.enableValidation();



// Функция для открытия попапа формы "Редактировать профиль"
const openEditPopup = () => {
  generateValuesInputsEditPopup();
  openPopup(popupEditSectionElement);
}

// Функция для открытия попапа формы "Новое место"
const openAddPopup = () => {
  const popupSaveButtonElement = popupAddSectionElement.querySelector('.popup__save-button');

  popupAddTitleInputElement.value = '';
  popupAddLinkTitleInputElement.value = '';
  popupSaveButtonElement.classList.add("button-inactive");
  popupSaveButtonElement.setAttribute("disabled", true);
  openPopup(popupAddSectionElement);
}

// Функция для закрытия попапа по клику на затемненную область.
const closePopupClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

// Функция для изменение значений по событию попапа "EditProfile" "Submit"
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Сохраняем новые значения.
  profileTitleElement.textContent = popupEditNameInputElement.value;
  profileSubtitleElement.textContent = popupEditAboutInputElement.value;
  closePopup();
}

// Функция для добавления карточки на сайт по событию "Submit"
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  // Проверка на заполнение значений в полях.
  const card = {name: popupAddTitleInputElement.value, link: popupAddLinkTitleInputElement.value};
  renderCard(card);

  closePopup();
}

// Регистрация обработчиков события.
popupEditFormElement.addEventListener("submit", handleProfileFormSubmit);
popupAddFormElement.addEventListener("submit", handleAddCardFormSubmit);
popupEditButtonElement.addEventListener("click", openEditPopup);
popupAddButtonElement.addEventListener("click", openAddPopup);
popupCloseButtonElements.forEach((item) => item.addEventListener("click", closePopup));
popupElements.forEach((item) => item.addEventListener("click", closePopupClickOnOverlay));



