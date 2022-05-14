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


const userInfo = new UserInfo(profileElements);
let userID; // Переменная для сохранения ID пользователя.

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
        popupDeleteCard.renderLoading(true);
        api.deleteCard(data._id)
          .then(() => {
            card.handleDelete();
            popupDeleteCard.close();
          })
          .catch(err => console.log(err))
          .finally(() => popupDeleteCard.renderLoading(false));
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


api.getAllData()
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData)
    userID = userData._id;
    cardList.render(cardsData);
  })
  .catch(err => console.log(err))



const popupImage = new PopupWithImage(popupImageSectionSelector);
popupImage.setEventListeners()

const popupFormAddCard = new PopupWithForm(popupAddSectionSelector, card => {
    popupFormAddCard.renderLoading(true)
    api.addCard(card)
      .then(data => {
        const card = createCard(data);
        cardList.addItem(card);
        popupFormAddCard.close();
      })
      .catch(err => console.log(err))
      .then(() => popupFormAddCard.renderLoading(false));
  }
)

const popupFormEditProfile = new PopupWithForm(popupEditSectionSelector, values => {
    popupFormEditProfile.renderLoading(true)
    api.setUserInfo(values)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupFormEditProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupFormEditProfile.renderLoading(false)
      })
  }
)

const popupDeleteCard = new PopupDeleteForm(popupDeleteCardSelector);

const popupFormEditAvatar = new PopupWithForm(popupEditAvatarSelector, (link) => {
  popupFormEditAvatar.renderLoading(true);
  api.editAvatar(link)
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupFormEditAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => popupFormEditAvatar.renderLoading(false))

});

// Установка слушателей на формы.
popupDeleteCard.setEventListeners();
popupFormAddCard.setEventListeners();
popupFormEditProfile.setEventListeners();
popupFormEditAvatar.setEventListeners();

// Установка валидации.
const popupEditSectionValidation = new FormValidator(popupEditSectionSelector, formComponents);
const popupAddSectionValidation = new FormValidator(popupAddSectionSelector, formComponents);
const popupEditAvatarValidation = new FormValidator(popupEditAvatarSelector, formComponents);

popupEditSectionValidation.enableValidation();
popupAddSectionValidation.enableValidation();
popupEditAvatarValidation.enableValidation();


// Колбэки на вызов форм.
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