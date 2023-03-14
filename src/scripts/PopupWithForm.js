import  Popup  from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor(popup, handlerSubmit) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._handlerSubmit = handlerSubmit;
  }
   _getInputValues() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value;
    });

    return this._values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handlerSubmit(this._getInputValues());
    });
  }
}