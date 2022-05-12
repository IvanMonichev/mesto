export class Card {

  constructor({data,  handleCardClick, handleDeleteClick }, cardComponents, templateSelector, userID) {
    this._templateContent = document.querySelector(templateSelector).content;
    this._name = data.name;
    this._link = data.link;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    
    this._likeSelector = cardComponents.likeSelector;
    this._deleteSelector = cardComponents.deleteSelector;
    this._cardImageSelector = cardComponents.cardImageSelector;
    this._titleSelector = cardComponents.titleSelector;

    this.handleDelete = this.handleDelete.bind(this);

    this._userID = userID;
    this._ownerID = data.owner._id;


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

    this._cardImageElement = this._element.querySelector(this._cardImageSelector);
    this._titleElement = this._element.querySelector(this._titleSelector);

    this._titleElement.textContent = this._name;
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = `Фотография загруженная пользователем «${this._name}»`;

    if(this._userID !== this._ownerID) {
      this._deleteButtonElement.classList.add('photo-gallery__delete-button_disabled');
    }

    this._setEventListeners();

    return this._element;
  }

  handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _toggleButtonLike() {
    this._likeButtonElement.classList.toggle('photo-gallery__like-button_active');
  }
  
  _setEventListeners() {


    this._deleteButtonElement.addEventListener('click', () => this._handleDeleteClick());
    this._likeButtonElement.addEventListener('click', () => this._toggleButtonLike());
    this._cardImageElement.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
  }
}
