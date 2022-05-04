import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm ) {
    super(popupSelector);

    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll('.popup__text-input');
    this._formValues = {};
    this._inputList.forEach(input => {this._formValues[input.name] = input.value});
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement = this._popupElement.querySelector('.popup__container');
    this._popupElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._inputList.forEach(input => {input.value = ""})
  }
}