import { template } from "./constants.js";

export default class Card {
  constructor( data , template, handleCardClick) {
    this._image = data.link;
    this._title = data.name;
    this._template = template;
    this._handleCardClick = handleCardClick;
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
      .addEventListener("click", () =>
        this._handleCardClick(this._title, this._image)
      );
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

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}

