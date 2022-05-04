import './index.css';

import {
  profileElements,
  popupEditButtonElement,
  popupAddButtonElement,

  popupEditSectionElement,
  popupEditNameInput,
  popupEditAboutInput,

  popupAddSectionElement,

  popupImageSectionElement,

  photoGalleryItemTemplateElement,
  cardListSelector,
  cardItems,
  cardComponents,
  formComponents
} from '../utils/constants.js';

import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import {Section} from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";

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

// Установка валидации.
const popupEditSectionValidation = new FormValidator(popupEditSectionElement, formComponents);
const popupAddSectionValidation = new FormValidator(popupAddSectionElement, formComponents);

popupEditSectionValidation.enableValidation();
popupAddSectionValidation.enableValidation();

// Форма добавления карточки.
const popupFormAddCard = new PopupWithForm(popupAddSectionElement, handleSubmitForm => {
    const card = createCard(handleSubmitForm);
    cardList.addItem(card);
  }
)

popupFormAddCard.setEventListeners()

// Форма редактирования профиля.
const userInfo = new UserInfo(profileElements)

const popupFormEditProfile = new PopupWithForm(popupEditSectionElement, () => {
  userInfo.setUserInfo(popupEditNameInput, popupEditAboutInput);
})

popupFormEditProfile.setEventListeners();

// Слушатели
popupAddButtonElement.addEventListener("click", () => {
  popupFormAddCard.open();
  popupAddSectionValidation.resetValidation();
});

popupEditButtonElement.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  popupEditNameInput.value = userData.name;
  popupEditAboutInput.value = userData.about;
  popupEditSectionValidation.resetValidation();
  popupFormEditProfile.open();
})

