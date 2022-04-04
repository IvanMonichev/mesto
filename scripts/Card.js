// --Photo Gallery--
const cardList = document.querySelector(".photo-gallery__list");

const cardItems = [{
  name: "Карелия", link: "./images/photo-1.jpg",
}, {
  name: "Санкт-Петербург", link: "./images/photo-2.jpg",
}, {
  name: "Иваново", link: "./images/photo-3.jpg",
}, {
  name: "Петрозаводск", link: "./images/photo-4.jpg",
}, {
  name: "Пётр 1", link: "./images/photo-5.jpg",
}, {
  name: "Кисловодск", link: "./images/photo-6.jpg",
}];

class Card {

  _template = document.querySelector(".photo-gallery__item-template").content;

  constructor(data) {
    this._name = data.name;
    this._link = data.link;

    this._handleDelete = this._handleDelete.bind(this);
    this._toggleButtonLike = this._toggleButtonLike.bind(this);
  }

  // Получаем шаблон карточки.
  _getTemplate() {
    const cardElement = this._template.querySelector('.photo-gallery__item').cloneNode(true);
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

  _setEventListeners() {
    this._element.querySelector('.photo-gallery__delete-button').addEventListener('click', this._handleDelete);
    this._element.querySelector('.photo-gallery__like-button').addEventListener('click', this._toggleButtonLike);
    // this._element.querySelector('.photo-gallery__image').addEventListener('click', this._openZoomImage);

  }

}

const renderCards = () => {
  cardItems.forEach((item) => {
    const card = new Card(item);
    const cardElement = card.generateCard();
    cardList.prepend(cardElement);

  });
};

renderCards();