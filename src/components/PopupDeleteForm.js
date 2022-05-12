import Popup from "./Popup.js";

export default class PopupDeleteForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);

    this._popupForm = this._popupElement.querySelector('.popup__container');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callBack();
      this.close();
    });
  }

  setSubmitProcessing(call) {
    this._callBack = call;
  }

}