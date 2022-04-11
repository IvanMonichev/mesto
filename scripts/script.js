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
  
 
  
  cardList,
  cardItems,
  formComponents
} from './data.js';

import {Card} from './Card.js'
import {ValidateForm} from './ValidateForm.js'

const generateValuesInputsEditPopup = () => {
  popupEditNameInputElement.value = profileTitleElement.textContent;
  popupEditAboutInputElement.value = profileSubtitleElement.textContent;
}

generateValuesInputsEditPopup();

const openPopup = (popup) => {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupPressOnEsc);

};

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

// Функция для закрытия попапов.
const closePopup = function () {
  const popupIsOpened = document.querySelector('.popup_is-opened');
  if (popupIsOpened) {
    popupIsOpened.classList.remove('popup_is-opened');
    document.removeEventListener("keydown", closePopupPressOnEsc);
  }
};

// Функция для закрытия попапа по клику на затемненную область.
const closePopupClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

const closePopupPressOnEsc = (event) => {
  if (event.key === "Escape") {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    if (popupIsOpened) {
      closePopup();
    }
  }
}

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

// Создание карточек.
const renderCards = () => {
  cardItems.forEach((item) => {
    const card = new Card(item);
    const cardElement = card.generateCard();
    cardList.prepend(cardElement);

  });
};

renderCards();



// Установка валидации
const popupEditSectionValidation = new ValidateForm(popupEditSectionElement, formComponents);
const popupAddSectionValidation = new ValidateForm(popupAddSectionElement, formComponents);

popupEditSectionValidation.enableValidation();
popupAddSectionValidation.enableValidation();

export {openPopup}