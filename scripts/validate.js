// Показать ошибки валидации.
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__text-input_type_error');
  errorElement.textContent = errorMessage;
}

// Скрыть ошибки валидации.
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__text-input_type_error');
  errorElement.textContent = '';
}

// Проверка поля ввода на ошибки валидации.
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

}

// Переключение кнопки из активного состояния в неактивное
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button-inactive');
  } else {
    buttonElement.classList.remove('button-inactive');
  }
}

// Установка слушателя
const setEventListenersInputs = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text-input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

setValidationForms = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    setEventListenersInputs(formElement);
  })
}

// Установка функции валидации на формы.
const enableValidation = () => {

}

// Проверка поля ввода на валидацию.
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log(!inputElement.validity.valid);
    return !inputElement.validity.valid;
  })
}

enableValidation();

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});