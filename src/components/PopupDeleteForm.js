import Popup from "./Popup.js";

export default class PopupDeleteForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupForm = this._popupElement.querySelector('.popup__container');
    this._popupButtonElement = this._popupForm.querySelector('.popup__save-button');
    this._popupButtonTextContent = this._popupButtonElement.textContent
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callBack();
    });
  }

  setSubmitProcessing(call) {
    this._callBack = call;
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._popupButtonElement.textContent = 'Сохранение...'
    } else {
      this._popupButtonElement.textContent = this._popupButtonTextContent;
    }
  }

}