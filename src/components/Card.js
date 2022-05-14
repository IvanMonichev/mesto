import {isView} from "core-js/internals/array-buffer-view-core";

export class Card {

  constructor({data,  handleCardClick, handleDeleteClick }, cardComponents, templateSelector, userID, api) {
    this._templateContent = document.querySelector(templateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerUser = data.owner.name;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    
    this._likeSelector = cardComponents.likeSelector;
    this._deleteSelector = cardComponents.deleteSelector;
    this._cardImageSelector = cardComponents.cardImageSelector;
    this._titleSelector = cardComponents.titleSelector;
    this._likeCounterSelector = cardComponents.likeCounterSelector;

    this.handleDelete = this.handleDelete.bind(this);

    this._userID = userID;
    this._ownerID = data.owner._id;
    this._cardID = data._id;

    this._api = api;

  }

  // Получаем шаблон карточки.
  _getTemplate() {
    const cardElement = this._templateContent.querySelector('.photo-gallery__item').cloneNode(true);
    return cardElement;
  }

  // Генерируем карточку.
  generateCard() {
    this._element = this._getTemplate();
    this._deleteButtonElement = this._element.querySelector(this._deleteSelector);
    this._likeButtonElement = this._element.querySelector(this._likeSelector);
    this._likeCounterElement = this._element.querySelector(this._likeCounterSelector);

    this._cardImageElement = this._element.querySelector(this._cardImageSelector);
    this._titleElement = this._element.querySelector(this._titleSelector);

    this._titleElement.textContent = this._name;
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = `Фотография «${this._name}» загруженная пользователем ${this._ownerUser}`;
    this._likeCounterElement.textContent = this._likes.length;

    if(this._userID !== this._ownerID) {
      this._deleteButtonElement.classList.add('photo-gallery__delete-button_disabled');
    }

    if(this._likes.some(like => like._id === this._userID)) {
      this._addClassButtonLike();
    }



    this._setEventListeners();

    return this._element;
  }

  _isNotLiked() {
    const checkLiked = this._likeButtonElement.classList.contains('photo-gallery__like-button_active');
    return !checkLiked;
  }

  handleDelete() {
    this._element.remove();
    this._element = null;
  }


  _handleLike() {
    if(this._isNotLiked()) {
      this._api.likeCard(this._cardID)
        .then(data => {
          this._likeCounterElement.textContent = data.likes.length;
          this._likeButtonElement.classList.add('photo-gallery__like-button_active');
        })
        .catch(err => console.log(err))
    } else {
      this._api.dislikeCard(this._cardID)
        .then(data => {
          this._likeCounterElement.textContent = data.likes.length;
          this._likeButtonElement.classList.remove('photo-gallery__like-button_active');
        })
        .catch(err => console.log(err))
    }

  }

  _addClassButtonLike() {
    this._likeButtonElement.classList.add('photo-gallery__like-button_active');
  }
  
  _setEventListeners() {


    this._deleteButtonElement.addEventListener('click', () => this._handleDeleteClick());
    this._likeButtonElement.addEventListener('click', () => this._handleLike());
    this._cardImageElement.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
  }
}
