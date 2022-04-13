import {
  popupImageSectionElement,
  popupImageElement,
  popupCaptionElement
} from './data.js'

import {openPopup} from "./utils.js";

export class Card {

  /*_template = document.querySelector(".photo-gallery__item-template").content;*/

  constructor(templateElement, data) {
    this._templateContent = templateElement.content;
    this._name = data.name;
    this._link = data.link;

    this._handleDelete = this._handleDelete.bind(this);
    this._toggleButtonLike = this._toggleButtonLike.bind(this);
    this._openZoomImage = this._openZoomImage.bind(this);
  }

  // Получаем шаблон карточки.
  _getTemplate() {
    const cardElement = this._templateContent.querySelector('.photo-gallery__item').cloneNode(true);
    return cardElement;
  }

  // Генерируем карточку.
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".photo-gallery__title").textContent = this._name;
    this._element.querySelector(".photo-gallery__image").src = this._link;
    this._element.querySelector(".photo-gallery__image").alt = `Фотография загруженная пользователем «${this._name}»`;

    this._setEventListeners();

    return this._element;
  }

  _handleDelete() {
    this._element.remove();
  }

  _toggleButtonLike() {
    const likeButtonElement = this._element.querySelector('.photo-gallery__like-button');
    likeButtonElement.classList.toggle('photo-gallery__like-button_active');
  }
  
  _openZoomImage() {
    popupImageElement.src = this._link;
    popupCaptionElement.textContent = this._name;
    popupImageElement.alt = `Фотография загруженная пользователем «${this._name}»`;
    openPopup(popupImageSectionElement);
  }
  
  _setEventListeners() {
    this._element.querySelector('.photo-gallery__delete-button').addEventListener('click', this._handleDelete);
    this._element.querySelector('.photo-gallery__like-button').addEventListener('click', this._toggleButtonLike);
    this._element.querySelector('.photo-gallery__image').addEventListener('click', this._openZoomImage);
  }
}
