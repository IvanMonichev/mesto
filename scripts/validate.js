// Показать ошибки валидации.
const showInputError = (formElement, inputElement, errorMessage, formComponents) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formComponents.inputErrorClass);
  errorElement.classList.add(formComponents.errorClass);
  errorElement.textContent = errorMessage;
}

// Скрыть ошибки валидации.
const hideInputError = (formElement, inputElement, formComponents) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formComponents.inputErrorClass);
  errorElement.classList.remove(formComponents.errorClass);
  errorElement.textContent = '';
}

// Проверка поля ввода на ошибки валидации.
const checkInputValidity = (formElement, inputElement, formComponents) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formComponents);
  } else {
    hideInputError(formElement, inputElement, formComponents);
  }
}

// Проверка поля ввода на валидацию.
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Переключение кнопки из активного состояния в неактивное
const toggleButtonState = (inputList, buttonElement, formComponents) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formComponents.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(formComponents.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
}

// Установка слушателя
const setEventListenersInputs = (formElement, formComponents) => {
  const inputList = Array.from(formElement.querySelectorAll(formComponents.inputSelector));
  const buttonElement = formElement.querySelector(formComponents.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, formComponents);
      toggleButtonState(inputList, buttonElement, formComponents);
    });
  });
  toggleButtonState(inputList, buttonElement, formComponents);
}

const cancelHandlerSubmit = (event) => {
  event.preventDefault();
}

enableValidation = (formComponents) => {
  const formList = Array.from(document.querySelectorAll(formComponents.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', cancelHandlerSubmit);
    setEventListenersInputs(formElement, formComponents);
  });
}


enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button-inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_visible'
});