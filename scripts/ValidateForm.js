const popupEditSectionElement = document.querySelector(".popup-edit-profile");
const popupAddSectionElement = document.querySelector(".popup-add-card");

class ValidateForm {
  constructor(formElement, data) {
    this._input = data.inputSelector;
    this._inputError = data.inputErrorClass;
    this._error = data.errorClass;
    this._button = data.submitButtonSelector;
    this._inactiveButton = data.inactiveButtonClass;

    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._input));
    this._buttonElement = this._formElement.querySelector(this._button);
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputError);
    errorElement.classList.add(this._error);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._error);
    errorElement.textContent = '';
  }
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButton);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButton);
      this._buttonElement.removeAttribute("disabled");
    }
  }
  
  _setEventListenersInputs() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () =>  {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
      this._toggleButtonState();
    });
    
  }
  
  enableValidation() {
    this._setEventListenersInputs();
  };

  consoleNotification() {
    console.log(this);
  }
}

const formComponents = {
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button-inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_visible'
}