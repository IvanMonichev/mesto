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
const setEventListenersInputs = (formElement, formComponent) => {
  const inputList = Array.from(formElement.querySelectorAll(formComponent.inputSelector));
  const buttonElement = formElement.querySelector(formComponent.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

enableValidation = (formComponents) => {
  const formList = Array.from(document.querySelectorAll(formComponents.formSelector));
  formList.forEach((formElement) => {
    setEventListenersInputs(formElement, formComponents);
  })
}

// Проверка поля ввода на валидацию.
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log(!inputElement.validity.valid);
    return !inputElement.validity.valid;
  })
}

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});