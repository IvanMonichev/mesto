import './index.css';

import {
  profileElements,
  popupEditButtonElement,
  popupAddButtonElement,
  popupEditAvatarButtonElement,

  popupEditSectionSelector,
  popupEditNameInput,
  popupEditAboutInput,
  popupEditAvatarSelector,

  popupAddSectionSelector,

  popupDeleteCardSelector,

  popupImageSectionSelector,

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
import PopupDeleteForm from "../components/PopupDeleteForm.js";
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

const popupImage = new PopupWithImage(popupImageSectionSelector);
popupImage.setEventListeners()

const popupDeleteCard = new PopupDeleteForm(popupDeleteCardSelector);
popupDeleteCard.setEventListeners()


// Создание карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupImage.open(data);
    },
    handleDeleteClick: () => {
      popupDeleteCard.open()
      popupDeleteCard.setSubmitProcessing(() => {
        api.deleteCard(data._id)
          .then()
          .catch(err => console.log(err));
        card.handleDelete();
      })
    }
  },
    cardComponents,
    photoGalleryItemTemplateSelector,
    userID,
    api);
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
api.getCardsData()
  .then((cardsData) => {
    cardList.render(cardsData)
  }).catch(err => console.log(err))



// Установка валидации.
const popupEditSectionValidation = new FormValidator(popupEditSectionSelector, formComponents);
const popupAddSectionValidation = new FormValidator(popupAddSectionSelector, formComponents);
const popupEditAvatarValidation = new FormValidator(popupEditAvatarSelector, formComponents);


popupEditSectionValidation.enableValidation();
popupAddSectionValidation.enableValidation();
popupEditAvatarValidation.enableValidation();

// Форма добавления карточки.
const popupFormAddCard = new PopupWithForm(popupAddSectionSelector, card => {
  popupFormAddCard.renderLoading(true)
  api.addCard(card)
    .then(data => {
      const card = createCard(data);
      cardList.addItem(card);
    })
    .catch(err => console.log(err))
    .then(() => popupFormAddCard.renderLoading(false));
  }
)

popupFormAddCard.setEventListeners()

// Форма редактирования профиля.
const userInfo = new UserInfo(profileElements);

const popupFormEditProfile = new PopupWithForm(popupEditSectionSelector, values => {
  popupFormEditProfile.renderLoading(true)
  api.setUserInfo(values)
    .then((data) => {
      userInfo.setUserInfo(data)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupFormEditProfile.renderLoading(false)
    })
  }
)

let userID; // Переменная для сохранения ID пользователя.

api.getUserData()
  .then(data => {
    userInfo.setUserInfo(data);
    userID = data._id;
  })
  .catch(err => console.log(err))

popupFormEditProfile.setEventListeners();

// Форма редактирования аватара.
const popupFormEditAvatar = new PopupWithForm(popupEditAvatarSelector, (link) => {
  popupFormEditAvatar.renderLoading(true);
  api.editAvatar(link)
    .then((data) => {
      userInfo.setUserAvatar(data);
    })
    .catch(err => console.log(err))
    .finally(() => popupFormEditAvatar.renderLoading(false))

});
popupFormEditAvatar.setEventListeners();

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

popupEditAvatarButtonElement.addEventListener('click', () => {
  popupEditAvatarValidation.resetValidation();
  popupFormEditAvatar.open();
})