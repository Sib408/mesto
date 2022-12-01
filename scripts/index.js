const editButton = document.querySelector(".button_edit");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__button_close");

editButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = usernameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

let formElement = document.querySelector(".popup__form");

let nameInput = document.querySelector(".popup__input_type_username");
let descriptionInput = document.querySelector(".popup__input_type_decsription");
let usernameProfile = document.querySelector(".profile__username");
let descriptionProfile = document.querySelector(".profile__description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  usernameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);
