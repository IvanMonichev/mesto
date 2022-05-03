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

  popupImageSectionElement,

  photoGalleryItemTemplateElement,
  cardListSelector,
  cardItems,
  cardComponents,
  formComponents
} from './constants.js';

import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {Section} from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const popupImage = new PopupWithImage(popupImageSectionElement);
popupImage.setEventListeners()

// Создание карточки
const createCard = (item) => {
  const card = new Card({
    cardItems: item,
    handleCardClick: () => {
      popupImage.open(item);
    }
  }, cardComponents, photoGalleryItemTemplateElement);
  return card.generateCard();
}

// Генерация карточек в необходимую секцию.
const cardList = new Section({
  items: cardItems,
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  }
}, cardListSelector)

cardList.render();

const popupFormAddCard = new PopupWithForm(popupAddSectionElement, handleSubmitForm => {
    const card = createCard(handleSubmitForm);
    cardList.addItem(card);
  }
)

popupFormAddCard.setEventListeners()


popupAddButtonElement.addEventListener("click", () => {
  popupFormAddCard.open();
});


const generateValuesInputsEditPopup = () => {
  popupEditNameInputElement.value = profileTitleElement.textContent;
  popupEditAboutInputElement.value = profileSubtitleElement.textContent;
}

generateValuesInputsEditPopup();

// Установка валидации
/*
const popupEditSectionValidation = new FormValidator(popupEditSectionElement, formComponents);
const popupAddSectionValidation = new FormValidator(popupAddSectionElement, formComponents);

popupEditSectionValidation.enableValidation();
popupAddSectionValidation.enableValidation();

*/


/* ===OLD CODE==== */
// Функция для открытия попапа формы "Редактировать профиль"
/*
const openEditPopup = () => {
  generateValuesInputsEditPopup();
  popupEditSectionValidation.resetValidation();
  openPopup(popupEditSectionElement);
}
*/

/*
// Функция для открытия попапа формы "Новое место"
const openAddPopup = () => {
  const popupSaveButtonElement = popupAddSectionElement.querySelector('.popup__save-button');
  popupAddTitleInputElement.value = '';
  popupAddLinkTitleInputElement.value = '';
  popupAddSectionValidation.resetValidation();
  openPopup(popupAddSectionElement);
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
*/

// Регистрация обработчиков события.
/*
popupEditFormElement.addEventListener("submit", handleProfileFormSubmit);
popupAddFormElement.addEventListener("submit", handleAddCardFormSubmit);
popupEditButtonElement.addEventListener("click", openEditPopup);
popupAddButtonElement.addEventListener("click", openAddPopup);
*/



