// --- Работа с попапами ---
// Производим выборку DOM элементов.
const popupElements = document.querySelectorAll(".popup"); // Находим секции всех форм.
const arrayElementPopupForm = Array.from(popupElements); // Превращаем NodeList в массив.
const popupEditButtonElement = document.querySelector(".profile__edit-button"); // Находим кнопку для открытия формы "Редактирование профиля".
const popupEditProfileElement = document.querySelector(".popup-edit-profile"); // Находим секцию "Редактирование профиля".
const popupAddButtonElement = document.querySelector(".profile__add-button"); // Находим кнопку для открытия формы "Новое место"
const popupAddCardElement = document.querySelector(".popup-add-card"); // Находим секцию "Новое место"
const popupEditFormElement = arrayElementPopupForm[0].querySelector(".popup__container");
const popupAddFormElement = arrayElementPopupForm[1].querySelector(".popup__container");
const profileTitleElement = document.querySelector(".profile__title");
const profileSubtitleElement = document.querySelector(".profile__subtitle");

// Находим элементы форм
const popupCloseButtonElements = document.querySelectorAll(
  ".popup__close-button"
); // Находим секции всех форм.
const arrayPopupCloseButton = Array.from(popupCloseButtonElements); // Превращаем NodeList в массив.
const popupEditProfileNameInputElement = popupEditProfileElement.querySelector(
  ".popup__text-input_type_name"
);
const popupEditProfileAboutInputElement = popupEditProfileElement.querySelector(
  ".popup__text-input_type_about"
);
// Находим элементы формы "Новое место"

// --- Работа с фотогралерей ---
const photoGalleryItemTemplateContent = document.querySelector(
  ".photo-gallery__item-template"
).content; // Находим содержимое шаблона элемента Photo Gallery.
const photoGalleryListElement = document.querySelector(".photo-gallery__list");

// Создаём массив для хранения параметров карточек.
const initialCards = [
  {
    name: "Карелия",
    link: "./images/photo-1.jpg",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/photo-2.jpg",
  },
  {
    name: "Иваново",
    link: "./images/photo-3.jpg",
  },
  {
    name: "Петрозаводск",
    link: "./images/photo-4.jpg",
  },
  {
    name: "Пётр 1",
    link: "./images/photo-5.jpg",
  },
  {
    name: "Кисловодск",
    link: "./images/photo-6.jpg",
  },
];

// Функция для открытия всплывающего окна.
const openPopup = function (event) {
  if (event.target === popupEditButtonElement) {
    popupEditProfileNameInputElement.value = profileTitleElement.textContent;
    popupEditProfileAboutInputElement.value =
      profileSubtitleElement.textContent;
    popupEditProfileElement.classList.add("popup_is-opend");
  } else if (event.target === popupAddButtonElement) {
    popupAddCardElement.classList.add("popup_is-opend");
  }
};

// Функция для закрытия всплывающих окон.
const closePopup = function () {
  // Поиск открытой формы для её закрытия.
  arrayElementPopupForm.some(function (item) {
    if (item.getAttribute("class").includes("popup_is-opend")) {
      item.classList.remove("popup_is-opend");
      return true;
    }
  });
};

// Функция для закрытия окна по клику на затемненную область.
const closePopupClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup();
};

// Функция для изменение значений по событию формы "Submit"
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Сохраняем новые значения.
  profileTitleElement.textContent = popupEditProfileNameInputElement.value;
  profileSubtitleElement.textContent = popupEditProfileAboutInputElement.value;
  closePopup();
}


function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  
  const item = 'test'
  renderCard(item);
}

// 	Функция для генерации карточек на странице
function renderCard(item) {
  // Дублируем шаблон и записываем его в константу.
  const photoGalleryItemElement =
    photoGalleryItemTemplateContent.cloneNode(true);

  // Заполняем элементы шаблона данными из массива.
  photoGalleryItemElement.querySelector(".photo-gallery__title").textContent =
    item.name;
  photoGalleryItemElement.querySelector(".photo-gallery__image").src =
    item.link;

  // Добавляем готовый элемент на страницу.
  photoGalleryListElement.appendChild(photoGalleryItemElement);
}

// Перебираем массив где храняться хранятся карточки и используем функцию "rednerCard" для их добавления на страницу.
function renderCards(items) {
  items.forEach(renderCard);
}

// Инициализируем функцию для перебора массива.
renderCards(initialCards);

// Регистрация обработчика события по клику.
popupEditFormElement.addEventListener("submit", handleProfileFormSubmit);
popupAddFormElement.addEventListener("submit", handleAddCardFormSubmit);
popupEditButtonElement.addEventListener("click", openPopup);
popupAddButtonElement.addEventListener("click", openPopup);
arrayPopupCloseButton.forEach((item) =>
  item.addEventListener("click", closePopup)
);
arrayElementPopupForm.forEach((item) =>
  item.addEventListener("click", closePopupClickOnOverlay)
);
