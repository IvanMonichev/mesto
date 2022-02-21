
// Производим выборку DOM элементов.
const popupOpenButtonElement = document.querySelector('.profile__edit-button'); // Находим кнопку для открытия формы в DOM
const popupElement = document.querySelector('.popup'); // Находим секцию в DOM
const popupFormElement = document.querySelector('.popup__container');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubtitleElement = document.querySelector('.profile__subtitle');

// Находим элементы формы в DOM.
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupNameInputElement = popupElement.querySelector('.popup__text-input_type_name');
const popupAboutInputElement = popupElement.querySelector('.popup__text-input_type_about');

// --- Работа с фотогралерей ---
const photoGalleryItemTemplateContent = document.querySelector('.photo-gallery__item-template').content; // Находим содержимое шаблона элемента Photo Gallery.
const photoGalleryListElement = document.querySelector('.photo-gallery__list');


// Создаём массив для хранения параметров карточек.
const initialCards = [
	{
		name: 'Карелия',
		link: './images/photo-1.jpg'
	},
	{
		name: 'Санкт-Петербург',
		link: './images/photo-2.jpg'
	},
	{
		name: 'Иваново',
		link: './images/photo-3.jpg'
	},
	{
		name: 'Петрозаводск',
		link: './images/photo-4.jpg'
	},
	{
		name: 'Пётр 1',
		link: './images/photo-5.jpg'
	},
	{
		name: 'Кисловодск',
		link: './images/photo-6.jpg'
	}
];

// Функция для открытия всплывающего окна.
const openPopup = function() {
	// Подставляем значения из элементов Title и Subtitle	в поля формы.
	popupNameInputElement.value = profileTitleElement.textContent;
	popupAboutInputElement.value = profileSubtitleElement.textContent;

	popupElement.classList.add('popup_is-opend');
};

// Функция для закрытия всплывающего окна.
const closePopup = function() {
	// Аннулируем введённые значения.
	
	popupElement.classList.remove('popup_is-opend');
};

// Функция для закрытия окна по клику на затемненную область.
const closePopupClickOnOverlay = function(event) {
	if (event.target !== event.currentTarget) {
		return;
	}

	closePopup();
};

// Функция для изменение значений по событию формы "Submit"
function handleProfileFormSubmit(evt) {
	evt.preventDefault();

	// Сохраняем новые значения.
	profileTitleElement.textContent = popupNameInputElement.value;
	profileSubtitleElement.textContent = popupAboutInputElement.value;
	closePopup();
}

// 	Функция для генерации карточек на странице
function renderCard(item) {
	// Дублируем шаблон и записываем его в константу.
	const photoGalleryItemElement = photoGalleryItemTemplateContent.cloneNode(true);

	// Заполняем элементы шаблона данными из массива.
	photoGalleryItemElement.querySelector('.photo-gallery__title').textContent = item.name;
	photoGalleryItemElement.querySelector('.photo-gallery__image').src = item.link;

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
popupFormElement.addEventListener('submit', handleProfileFormSubmit); 
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupClickOnOverlay);