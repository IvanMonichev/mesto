// Производим выборку DOM элементов.
const popupOpenButtonElement = document.querySelector('.profile__edit-button') // Находим кнопку для открытия формы в DOM
const popupElement = document.querySelector('.popup'); // Находим секцию в DOM
const popupFormElement = document.querySelector('.popup__container');
const profileTitleElement = document.querySelector('.profile__title');
const profileSubtitleElement = document.querySelector('.profile__subtitle');

// Находим элементы формы в DOM
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupNameInputElement = popupElement.querySelector('.popup__text-input_type_name');
const popupAboutInputElement = popupElement.querySelector('.popup__text-input_type_about');

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


// Регистрация обработчика события по клику.
popupFormElement.addEventListener('submit', handleProfileFormSubmit); 
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupClickOnOverlay);