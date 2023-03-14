 export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_type_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

 export const editButton = document.querySelector(".button_type_edit");
 export const addButton = document.querySelector(".button_type_add");


 export const addPopup = document.querySelector("#add_card");
 export const editPopup = document.querySelector("#edit_profile");


//popup edit
export const formEdit = document.querySelector("form[name='form_edit']");

export const nameInput = document.querySelector(".popup__input_type_username");
export const descriptionInput = document.querySelector(
  ".popup__input_type_decsription"
);
export const usernameProfile = document.querySelector(".profile__username");
export const descriptionProfile = document.querySelector(".profile__description");


//popup images

export const elementsContainer = ".elements";
export const template = document.querySelector(".template");


//popup add
export const formAdd = document.querySelector("form[name='form_add']");
export const nameCardInput = document.querySelector(".popup__input_type_name");
export const urlCardInput = document.querySelector(".popup__input_type_url");

export const inputFields = Array.from(formAdd.querySelectorAll(".popup__input"));
export const buttonValid = formAdd.querySelector(".popup__button_type_add");
