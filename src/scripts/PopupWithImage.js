import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._link = document.querySelector(".popup__img-card");
    this._name = document.querySelector(".popup__title-card");
  }


  open(name, link) {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._link.src = link;
    this._link.alt = name;
    this._name.textContent = name;
  }
  close() {
    this._popup.classList.remove("popup_opened");
    this._link.src = '';
    this._link.alt = '';
    this._name.textContent = '';
  }
}
