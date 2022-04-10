const popupEditSectionElement = document.querySelector(".popup-edit-profile");

class FormValidator {
  constructor(formElement, data) {
    this._form = formElement;
    
    this._input = data.inputSelector;
    

  }
  _setEventListenersInputs() {
    
  }
  
  _cancelHandlerSubmit() {
    
  }
  
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(formComponents.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', cancelHandlerSubmit);
      setEventListenersInputs(formElement, formComponents);
    });
  };
  
  

  consoleNotification() {
    console.log(this._form.querySelector(`${this._input}`));
  }
}

const formComponents = {
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button-inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_visible'
};

const testFormValidation = new FormValidator(popupEditSectionElement, formComponents);
testFormValidation.consoleNotification();


