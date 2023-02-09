import { template, imageLink, imageName, openPopup } from "./index.js";

class Card {
  constructor(data, template) {
    this._image = data.link;
    this._title = data.name;
    this._template = template;
  }

  _getTemplate() {
    const card = template.content.querySelector(".element").cloneNode(true);
    return card;
  }

  _setData() {
    const name = this._newCard.querySelector(".element__title");
    const link = this._newCard.querySelector(".element__img");
    name.textContent = this._title;
    link.src = this._image;
    link.alt = this._title;
  }

  _setEventListeners() {
    this._newCard
      .querySelector(".element__like")
      .addEventListener("click", () => {
        this._clickLike();
      });
    this._newCard
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._newCard
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._openImage();
      });
  }
  _clickLike() {
    this._newCard
      .querySelector(".element__like")
      .classList.toggle("element__like_active");
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _openImage() {
    const cardOpenPopup = document.querySelector("#card_open");
    imageLink.src = this._image;
    imageLink.alt = this._title;
    imageName.textContent = this._title;
    openPopup(cardOpenPopup);
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}
export default Card;
