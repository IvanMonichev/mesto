/* Константы */

/* Галерея */
const cardList = document.querySelector(".photo-gallery__list");

/* Попап изображения */
const popupImageSectionElement = document.querySelector('.image-zoom');
const popupImageContainerElement = popupImageSectionElement.querySelector('.image-zoom__container');
const popupImageElement = popupImageContainerElement.querySelector('.image-zoom__image');
const popupCaptionElement = popupImageContainerElement.querySelector('.image-zoom__caption');

export {cardList, popupImageSectionElement, popupImageElement, popupCaptionElement};