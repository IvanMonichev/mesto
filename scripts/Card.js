// --Photo Gallery--
const photoGalleryListElement = document.querySelector(".photo-gallery__list");

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
  
  template = document.querySelector(".photo-gallery__item-template").content;
  
  constructor(items) {
    this._name = items.name;
    this._link = items.name;
  }
  
  _getTemplate() {
    const cardElement = this.template.querySelector('.photo-gallery__item');
    cardElement.cloneNode(true);
    return cardElement;
  }
  
  renderCard() {
    this._element = this._getTemplate();
  }
}