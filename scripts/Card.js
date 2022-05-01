export class Card {

  constructor(templateElement, cardComponents, handleCardClick, cardItems) {
    this._templateContent = templateElement.content;
    this._name = cardItems.name;
    this._link = cardItems.link;

    this._likeButton = cardComponents.likeButton;
    this._deleteButton = cardComponents.deleteButton;
    this._cardImage = cardComponents.cardImage;

    this._handleCardClick = handleCardClick;

    this._handleDelete = this._handleDelete.bind(this);
    this._toggleButtonLike = this._toggleButtonLike.bind(this);
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
    this._likeButtonElement.classList.toggle('photo-gallery__like-button_active');
  }
  
  _setEventListeners() {
    this._deleteButtonElement = this._element.querySelector(this._deleteButton);
    this._likeButtonElement = this._element.querySelector(this._likeButton);
    this._cardImageElement = this._element.querySelector(this._cardImage);

    this._deleteButtonElement.addEventListener('click', this._handleDelete);
    this._likeButtonElement.addEventListener('click', this._toggleButtonLike);
    this._cardImageElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
