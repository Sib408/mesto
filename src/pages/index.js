import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import {
  initialCards,
  validationConfig,
  editButton,
  addButton,
  formEdit,
  nameInput,
  descriptionInput,
  elementsContainer,
  formAdd,
} from "../scripts/constants.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import "../pages/index.css";

const cardList = new Section(
  {
    items: initialCards.reverse(),
    renderer: ({ name, link }) => {
      const card = new Card({ name, link }, ".template", handleCardClick);
      const cardElement = card.getView();

      cardList.addItem(cardElement);
    },
  },
  elementsContainer
);

cardList.renderItems();

const userInfo = new UserInfo({
  name: ".profile__username",
  description: ".profile__description",
});

// popup Edit

const popupEdit = new PopupWithForm("#edit_profile", editFormSubmit);
popupEdit.setEventListeners();

editButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = description;
  formEditValidator.resetFormButton();
  popupEdit.open();
});

function editFormSubmit({ name, description }) {
  userInfo.setUserInfo(nameInput.value, descriptionInput.value);
  popupEdit.close();
}
// popup Add

const popupAdd = new PopupWithForm("#add_card", addFormSubmit);
popupAdd.setEventListeners();

addButton.addEventListener("click", () => {
  formAddValidator.resetFormButton();
  popupAdd.open();
});

function addFormSubmit(data) {
  const newCard = new Card(
    { name: data.name, link: data.link },
    ".template",
    handleCardClick
  );

  cardList.addItem(newCard.getView());

  popupAdd.close();
}

const popupWithImage = new PopupWithImage(".popup_card-open");
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

const formEditValidator = new FormValidator(validationConfig, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAdd);
formAddValidator.enableValidation();
