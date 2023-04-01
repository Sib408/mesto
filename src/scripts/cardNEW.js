export default class Card {
  constructor(data, template, handleCardClick) {
    this._title = data.name;
    this._image = data.link;

    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
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
    this._likeButton = this._newCard.querySelector(".element__like");
    this._likeButton.addEventListener("click", () => {
      this._clickLike();
    });
    this._deleteButton = this._newCard.querySelector(".element__delete");
    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardImage = this._newCard.querySelector(".element__img");
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._title, this._image)
    );
  }
  _clickLike() {
      this._likeButton.classList.toggle("element__like_active");
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
