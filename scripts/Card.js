// --Photo Gallery--
const cardList = document.querySelector(".photo-gallery__list");

const cardItems = [
  {
    name: "Карелия",
    link: "./images/photo-1.jpg",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/photo-2.jpg",
  },
  {
    name: "Иваново",
    link: "./images/photo-3.jpg",
  },
  {
    name: "Петрозаводск",
    link: "./images/photo-4.jpg",
  },
  {
    name: "Пётр 1",
    link: "./images/photo-5.jpg",
  },
  {
    name: "Кисловодск",
    link: "./images/photo-6.jpg",
  }
];

class Card {
  
  _template = document.querySelector(".photo-gallery__item-template").content;
  
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }
  
  // Получаем шаблон карточки.
  _getTemplate() {
    const cardElement = this._template.querySelector('.photo-gallery__item').cloneNode(true);
    return cardElement;
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".photo-gallery__title").textContent = this._name;
    this._element.querySelector(".photo-gallery__image").src = this._link;
    this._element.querySelector(".photo-gallery__image").alt = `Фотография загруженная пользователем «${this._name}»`;
    
    return this._element;
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