import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.image-zoom__image');
    this._popupCaption = this._popupElement.querySelector('.image-zoom__caption');
  }

  open({name, link}) {
    super.open();

    this._popupImage.src = link;
    this._popupImage.alt = `Фотография загруженная пользователем «${name}»`;
    this._popupCaption.textContent = name;
  }

}