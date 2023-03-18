import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._link = document.querySelector(".popup__img-card");
    this._name = document.querySelector(".popup__title-card");
  }

  open({name, link}) {
    super.open()
    this._link.src = link;
    this._link.alt = name;
    this._name.textContent = name;
  }
  close() {
    super.close();
    this._link.src = '';
    this._link.alt = '';
    this._name.textContent = '';
  }
}
