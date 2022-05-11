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

  photoGalleryItemTemplateSelector,
  cardListSelector,
  cardComponents,
  formComponents
} from '../utils/constants.js';

import {Card} from '../components/Card.js'
import {FormValidator} from '../components/FormValidator.js'
import {Section} from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import {Api} from "../components/Api.js";


// Подключаемся к API.
const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: "dadcd802-4ad4-4dc6-a2f2-1b872af8377c",
    'Content-Type': 'application/json'
  }
})



const popupImage = new PopupWithImage(popupImageSectionElement);
popupImage.setEventListeners()

// Создание карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupImage.open(data);
    }
  }, cardComponents, photoGalleryItemTemplateSelector);
  return card.generateCard();
}

// Генерация карточек в необходимую секцию.
const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  }
}, cardListSelector)

// Перебрасываем данные через метод для генерации
api.getInitialCards()
  .then((cardsData) => {
    cardList.render(cardsData)
  })


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

const popupFormEditProfile = new PopupWithForm(popupEditSectionElement, values => {
  api.setUserInfo(values)
    .then((data) => {
      userInfo.setUserInfo(data)
    })
    .catch((err) => console.log(err));
  }
)

api.getUserData()
  .then(values => {
    userInfo.setUserInfo(values)
  })
  .catch(err => {console.log(err)})

popupFormEditProfile.setEventListeners();

// Слушатели
popupAddButtonElement.addEventListener("click", () => {
  popupAddSectionValidation.resetValidation();
  popupFormAddCard.open();
});

popupEditButtonElement.addEventListener('click', () => {
  const userData = userInfo.getUserValues();
  popupEditNameInput.value = userData.name;
  popupEditAboutInput.value = userData.about;
  popupEditSectionValidation.resetValidation();
  popupFormEditProfile.open();
})

