import Card from "./Card.js";
import FormValidator from "./Validate.js";
import { initialCards } from "./constants.js";

 export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_type_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

const editButton = document.querySelector(".button_type_edit");
const addButton = document.querySelector(".button_type_add");

const popups = document.querySelectorAll(".popup");
const addPopup = document.querySelector("#add_card");
const editPopup = document.querySelector("#edit_profile");
// const cardOpenPopup = document.querySelector("#card_open");
const popupCloseButtons = document.querySelectorAll(
  ".popup__button_type_close"
);

editButton.addEventListener("click", function () {
  nameInput.value = usernameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  formAddValidator.resetFormButton();
  openPopup(editPopup);
});

addButton.addEventListener("click", () => {
  openPopup(addPopup);
  formAddValidator.resetFormButton();
});

export function openPopup(item) {
  item.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(item) {
  item.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

popupCloseButtons.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => {
    closePopup(popup);
  });
});

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpenItem = document.querySelector(".popup_opened");
    closePopup(popupOpenItem);
  }
}
popups.forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(item);
    }
  });
});

//popup edit
const formEdit = document.querySelector("form[name='form_edit']");

const nameInput = document.querySelector(".popup__input_type_username");
const descriptionInput = document.querySelector(
  ".popup__input_type_decsription"
);
const usernameProfile = document.querySelector(".profile__username");
const descriptionProfile = document.querySelector(".profile__description");

function editFormSubmit(evt) {
  evt.preventDefault();
  usernameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(editPopup);
}

formEdit.addEventListener("submit", editFormSubmit);

export const imageLink = document.querySelector(".popup__img-card");
export const imageName = document.querySelector(".popup__title-card");

const elementsContainer = document.querySelector(".elements");
export const template = document.querySelector(".template");


const renderCard = (cardItem) => {
  const card = new Card(cardItem);
  elementsContainer.prepend(card.getView());
};

initialCards.forEach(renderCard);

const addCard = (event) => {
  event.preventDefault();
  const cardLink = urlCardInput.value;
  const cardName = nameCardInput.value;
  renderCard({ name: cardName, link: cardLink });

  event.target.reset("");
  closePopup(addPopup);
};

//popup add
const formAdd = document.querySelector("form[name='form_add']");
const nameCardInput = document.querySelector(".popup__input_type_name");
const urlCardInput = document.querySelector(".popup__input_type_url");

const inputFields = Array.from(formAdd.querySelectorAll(".popup__input"));
const buttonValid = formAdd.querySelector(".popup__button_type_add");

formAdd.addEventListener("submit", addCard);


const formEditValidator = new FormValidator(validationConfig, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAdd);
formAddValidator.enableValidation();
