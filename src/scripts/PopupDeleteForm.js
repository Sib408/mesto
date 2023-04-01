import  Popup  from "./Popup.js"

    export default class PopupDeleteForm extends Popup {
      constructor(popup){
          super(popup);
          this._form = this._popup.querySelector('.popup__form');

        }

        setHandlerSubmit(handler) {
          this._handleSubmit = handler;
      }

        setEventListeners() {
          super.setEventListeners();

          this._form.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._handleSubmit();
          })
        }
      }
