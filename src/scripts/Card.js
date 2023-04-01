export default class Card {
  constructor( name, link, likes, id, userId, ownerId,  template, { handleCardClick, deleteClick, handleLikeClick }) {
    this._title = name;
    this._image = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;

    this._template = template;
    this._handleCardClick = handleCardClick;
    this._deleteClick = deleteClick;
    this._likeClick = handleLikeClick;
  }

  getCardItem = () => {

      this._newCard = document
        .querySelector(this._template)
        .content.querySelector(".element")
        .cloneNode(true);
      this._cardImage = this._newCard.querySelector(".element__img");
      this._deleteButton = this._newCard.querySelector(".element__delete");
      this._likeButton = this._newCard.querySelector(".element__like");


      this._fillCard();
      this.setLikes(this._likes);
      this._setEventListeners();

      if (this._ownerId !== this._userId) {
        this._deleteButton.remove();
      }

      return this._newCard;
  }

_fillCard = () => {
  this._newCard.querySelector(".element__title").textContent = this._title;

    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
}
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeClick(this._id);
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteClick(this._id);
    });

    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._title, this._image)
    );
  }

  isLiked() {
    const userLiked = this._likes.find(user => user._id === this._userId);
    return userLiked;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const counterLikes = this._newCard.querySelector(".element__like_counter");
    counterLikes.textContent = this._likes.length;

    if (this.isLiked()) {
      this._addLike();
    } else {
      this._removeLike();
    }
  }
  _addLike() {
    this._likeButton.classList.add("element__like_active");
  }
  _removeLike() {
    this._likeButton.classList.remove("element__like_active");
  }

  deleteItem() {
    this._newCard.remove();
  }

}
