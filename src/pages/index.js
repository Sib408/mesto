import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import {
  initialCards,
  validationConfig,
  avatarButton,
  editButton,
  addButton,
  formEdit,
  avatarPopup,
  nameInput,
  descriptionInput,
  elementsContainer,
  formAdd,
  formAvatar,
} from "../utils/constants.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import { api } from "../scripts/Api.js";
import "../pages/index.css";
import PopupDeleteForm from "../scripts/PopupDeleteForm.js";
let userId;

//  popup delete Card
const popupDeleteCard = new PopupDeleteForm("#delete_card");
popupDeleteCard.setEventListeners();

let cardList;
Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cards, userInfo]) => {
    newUserInfo.setUserInfo(userInfo.name, userInfo.about, userInfo.avatar);
    userId = userInfo._id;

    cardList = new Section(
      {
        items: cards.reverse(),
        renderer: createCard,
      },
      elementsContainer
    );
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(item) {
  const card = new Card(
    item.name,
    item.link,
    item.likes,
    item._id,
    userId,
    item.ownerId,

    ".template",
    {
      handleCardClick: (name, link) => {
        popupWithImage.open({ name, link });
      },
      deleteClick: (id) => {
        popupDeleteCard.setHandlerSubmit(() => {
          api
            .deleteCard(id)
            .then((res) => {
              card.deleteItem();
              popupDeleteCard.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
        popupDeleteCard.open();
      },
      handleLikeClick: (id) => {
        if (card.isLiked()) {
          api
            .deleteLike(id)
            .then((res) => {
              card.setLikes(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .addLike(id)
            .then((res) => {
              card.setLikes(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    }
  );
  const cardElement = card.getCardItem();

  return cardElement;
}

const newUserInfo = new UserInfo({
  name: ".profile__username",
  about: ".profile__description",
  avatar: ".profile__avatar",
});

// popup Avatar
const popupAvatar = new PopupWithForm("#avatar_profile", {
  handlerSubmit: (image) => {
    popupAvatar.renderLoading(true);
    const { avatar } = image;
    api
      .changeAvatar(avatar)
      .then((res) => {
        newUserInfo.setUserInfo(res.name, res.link, res.avatar);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAvatar.renderLoading(false);
      });
  },
});

popupAvatar.setEventListeners();

avatarButton.addEventListener("click", () => {
  formAvatarValidator.resetValidation();
  popupAvatar.open();
});

// popup Edit

const popupEdit = new PopupWithForm("#edit_profile", {
  handlerSubmit: (data) => {
    popupEdit.renderLoading(true);
    api
      .editProfile(data.name, data.about)
      .then((res) => {
        newUserInfo.setUserInfo(res.name, res.about, res.avatar);
        popupEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEdit.renderLoading(false);
      });
  },
});

popupEdit.setEventListeners();

editButton.addEventListener("click", () => {
  const { name, about } = newUserInfo.getUserInfo();
  popupEdit.setInputValues({ name, about });
  formEditValidator.resetValidation();
  popupEdit.open();
});

// popup Add

const popupAdd = new PopupWithForm("#add_card", {
  handlerSubmit: (data) => {
    popupAdd.renderLoading(true);
    api
      .addCard(data.name, data.link)
      .then((res) => {
        const card = {
          name: res.name,
          link: res.link,
          likes: res.likes,
          _id: res._id,
          userId: userId,
          ownerId: res.owner._id,
        };
        cardList.addItem(createCard(card));
        popupAdd.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAdd.renderLoading(false);
      });
  },
});

addButton.addEventListener("click", () => {
  formAddValidator.resetValidation();
  popupAdd.open();
});

popupAdd.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_card-open");
popupWithImage.setEventListeners();

const formEditValidator = new FormValidator(validationConfig, formEdit);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validationConfig, formAdd);
formAddValidator.enableValidation();

const formAvatarValidator = new FormValidator(validationConfig, formAvatar);
formAvatarValidator.enableValidation();
