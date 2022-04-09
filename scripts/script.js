// --- Объявление переменных ---
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

// Создаём ассоциативный массив для хранения параметров карточек.

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

// Функция для возможности ставить и снимать лайки.
/*function toggleButtonLike(event) {
  // Находим элемент "event" и добавляем ему класс.
  event.target.classList.toggle('photo-gallery__like-button_active');
}*/

// Регистрация обработчиков события.
popupEditFormElement.addEventListener("submit", handleProfileFormSubmit);
popupAddFormElement.addEventListener("submit", handleAddCardFormSubmit);
popupEditButtonElement.addEventListener("click", openEditPopup);
popupAddButtonElement.addEventListener("click", openAddPopup);
popupCloseButtonElements.forEach((item) => item.addEventListener("click", closePopup));
popupElements.forEach((item) => item.addEventListener("click", closePopupClickOnOverlay));

// Обработчик сгенерированных элементов.
// function setEventListeners(cardElement) {
//   cardElement.querySelector('.photo-gallery__like-button').addEventListener('click', toggleButtonLike);
//   cardElement.querySelector('.photo-gallery__delete-button').addEventListener('click', handleDelete);
//   cardElement.querySelector('.photo-gallery__image').addEventListener('click', openZoomImage);
// }

