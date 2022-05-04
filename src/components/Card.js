export class Card {

  constructor({data,  handleCardClick }, cardComponents, templateSelector) {
    this._templateContent = document.querySelector(templateSelector).content;
    this._name = data.name;
    this._link = data.link;

    this._handleCardClick = handleCardClick;
    
    this._likeSelector = cardComponents.likeSelector;
    this._deleteSelector = cardComponents.deleteSelector;
    this._cardImageSelector = cardComponents.cardImageSelector;
    this._titleSelector = cardComponents.titleSelector;


    this._handleDelete = this._handleDelete.bind(this);
  }

  // Получаем шаблон карточки.
  _getTemplate() {
    const cardElement = this._templateContent.querySelector('.photo-gallery__item').cloneNode(true);
    return cardElement;
  }

  // Генерируем карточку.
  generateCard() {
    this._element = this._getTemplate();
    this._cardImageElement = this._element.querySelector(this._cardImageSelector);
    this._titleElement = this._element.querySelector(this._titleSelector);

    this._titleElement.textContent = this._name;
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = `Фотография загруженная пользователем «${this._name}»`;

    this._setEventListeners();

    return this._element;
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;

  }

  _toggleButtonLike() {
    this._likeButtonElement.classList.toggle('photo-gallery__like-button_active');
  }
  
  _setEventListeners() {
    this._deleteButtonElement = this._element.querySelector(this._deleteSelector);
    this._likeButtonElement = this._element.querySelector(this._likeSelector);

    this._deleteButtonElement.addEventListener('click', this._handleDelete);
    this._likeButtonElement.addEventListener('click', () => this._toggleButtonLike());
    this._cardImageElement.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
  }
}
