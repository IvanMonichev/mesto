import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);

    this._popupForm = this._popupElement.querySelector('.popup__container');
    this._inputList = this._popupForm.querySelectorAll('.popup__text-input');
    this._popupButtonElement = this._popupForm.querySelector('.popup__save-button');
    this._popupButtonTextContent = this._popupButtonElement.textContent

    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {formValues[input.name] = input.value});
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._popupButtonElement.textContent = 'Сохранение...'
    } else {
      this._popupButtonElement.textContent = this._popupButtonTextContent;
    }
  }
}