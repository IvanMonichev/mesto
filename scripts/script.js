// --- Объявление переменных ---
// --Section Profile--
const profileTitleElement = document.querySelector(".profile__title");
const profileSubtitleElement = document.querySelector(".profile__subtitle");
const popupEditButtonElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");

// --Photo Gallery--
const photoGalleryItemTemplateElement = document.querySelector(".photo-gallery__item-template");
const photoGalleryListElement = document.querySelector(".photo-gallery__list");

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

// --Image Zoom Popup--
const popupImageSectionElement = document.querySelector('.image-zoom');
const popupImageContainerElement = popupImageSectionElement.querySelector('.image-zoom__container');
const popupImageElement = popupImageContainerElement.querySelector('.image-zoom__image');
const popupCaptionElement = popupImageContainerElement.querySelector('.image-zoom__caption');

// Создаём ассоциативный массив для хранения параметров карточек.
const initialCards = [{
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

const generateValuesInputsEditPopup = () => {
  popupEditNameInputElement.value = profileTitleElement.textContent;
  popupEditAboutInputElement.value = profileSubtitleElement.textContent;
}

generateValuesInputsEditPopup();

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

// Функция для открытия попапа с изображением
function openZoomImage(event) {
  popupImageElement.src = event.target.getAttribute('src'); // Присваиваем значение атрибута SRC значению атрибута элемента "event".
  const textCardElement = event.target.closest('.photo-gallery__item').querySelector('.photo-gallery__title').textContent; // Находим текстовое содержание заголовка элемента "event".
  popupCaptionElement.textContent = textCardElement; // Присваиваем элементу ранее найденное текстовое содержание.
  popupImageElement.alt = `Фотография загруженная пользователем «${textCardElement}»`; // Присваиваем элементу ранее найденное текстовое содержание.
  openPopup(popupImageSectionElement);
}

// Общая функция для открытия попапов.
const openPopup = (popup) => {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closePopupPressOnEsc);

};

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

// 	Функция для генерации карточек на странице
function createCard(item) {
  // Дублируем шаблон и записываем его в константу.
  const photoGalleryItemElement = photoGalleryItemTemplateElement.content.cloneNode(true);

  // Заполняем элементы шаблона данными из массива.
  photoGalleryItemElement.querySelector(".photo-gallery__title").textContent = item.name;
  photoGalleryItemElement.querySelector(".photo-gallery__image").src = item.link;
  photoGalleryItemElement.querySelector(".photo-gallery__image").alt = `Фотография загруженная пользователем «${item.name}»`;

  // Вешаем обработчики на сгенерированный элемент
  setEventListeners(photoGalleryItemElement);

  // Возвращаем готовую карточку.
  return photoGalleryItemElement;
}

// Функция для внедрения в разметку карточки
function renderCard(card) {
  const photoGalleryItemElement = createCard(card);
  photoGalleryListElement.prepend(photoGalleryItemElement);

}

// Функция для перебора массива
function renderCards(items) {
  items.forEach(renderCard);
}

// Инициализируем перебор массива
renderCards(initialCards);

// Функция для добавления карточки на сайт по событию "Submit"
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  // Проверка на заполнение значений в полях.
  const card = {name: popupAddTitleInputElement.value, link: popupAddLinkTitleInputElement.value};
  renderCard(card);

  closePopup();
}

// Функция для удаления карточки.
function handleDelete(event) {
  // Находим в DOM-дереве родителя элемента "event".
  const cardElement = event.target.closest('.photo-gallery__item');
  // Удаляем элемент.
  cardElement.remove();
}

// Функция для возможности ставить и снимать лайки.
function toggleButtonLike(event) {
  // Находим элемент "event" и добавляем ему класс.
  event.target.classList.toggle('photo-gallery__like-button_active');
}

// Регистрация обработчиков события.
popupEditFormElement.addEventListener("submit", handleProfileFormSubmit);
popupAddFormElement.addEventListener("submit", handleAddCardFormSubmit);
popupEditButtonElement.addEventListener("click", openEditPopup);
popupAddButtonElement.addEventListener("click", openAddPopup);
popupCloseButtonElements.forEach((item) => item.addEventListener("click", closePopup));
popupElements.forEach((item) => item.addEventListener("click", closePopupClickOnOverlay));

// Обработчик сгенерированных элементов.
function setEventListeners(cardElement) {
  cardElement.querySelector('.photo-gallery__like-button').addEventListener('click', toggleButtonLike);
  cardElement.querySelector('.photo-gallery__delete-button').addEventListener('click', handleDelete);
  cardElement.querySelector('.photo-gallery__image').addEventListener('click', openZoomImage);
}

