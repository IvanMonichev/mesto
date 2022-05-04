export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_is-opened');
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
        this.close();
    }
  }

  _handleOverlayClose(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.close();
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector('.popup__close-button');
    closeButton.addEventListener('click', () => {this.close()});
    this._popupElement.addEventListener('click', (event) => {this._handleOverlayClose(event)})
  }
}