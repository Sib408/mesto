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
} from "../utils/constants.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import "../pages/index.css";

const cardList = new Section(
  {
    items: initialCards.reverse(),
    renderer: (cardElement) => {
      cardList.addItem(createCard(cardElement));
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
  popupEdit.setInputValues({ name, description });
  formEditValidator.resetValidation();
  popupEdit.open();
});

function editFormSubmit({name, description}) {
    userInfo.setUserInfo(name, description );
     popupEdit.close();
  }

// popup Add

const popupAdd = new PopupWithForm("#add_card", addFormSubmit);
popupAdd.setEventListeners();

addButton.addEventListener("click", () => {
  formAddValidator.resetValidation();
  popupAdd.open();
});

function addFormSubmit(values) {
  const name = values.name;
  const link = values.link;
  const newCard = createCard({ name, link });

  cardList.addItem(newCard);

  popupAdd.close();
}

function createCard({ name, link }) {
  const card = new Card({ name, link }, ".template", handleCardClick);
  const cardElement = card.getView();

  return cardElement;
}

const popupWithImage = new PopupWithImage(".popup_card-open");
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open({ name, link });
}

const formEditValidator = new FormValidator(validationConfig, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAdd);
formAddValidator.enableValidation();
