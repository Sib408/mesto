const editButton = document.querySelector(".button_type_edit");
const addButton = document.querySelector(".button_type_add");

const popups = document.querySelectorAll(".popup");
const addPopup = document.querySelector("#add_card");
const editPopup = document.querySelector("#edit_profile");
const cardOpenPopup = document.querySelector("#card_open");
const popupCloseButtons = document.querySelectorAll(
  ".popup__button_type_close"
);

editButton.addEventListener("click", function () {
  nameInput.value = usernameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  openPopup(editPopup);
});

addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

function openPopup(item) {
  item.classList.add("popup_opened");
}

function closePopup(item) {
  item.classList.remove("popup_opened");
}

popupCloseButtons.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => {
    closePopup(popup);
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

const imageLink = document.querySelector(".popup__img-card");
const imageName = document.querySelector(".popup__title-card");

const elementsContainer = document.querySelector(".elements");
const template = document.querySelector(".template");

const createCard = (element) => {
  const card = template.content.querySelector(".element").cloneNode(true);
  const image = card.querySelector(".element__img");

  card.querySelector(".element__title").textContent = element.name;
  image.src = element.link;
  image.alt = element.name;

  card.querySelector(".element__like").addEventListener("click", clickLike);
  card.querySelector(".element__delete").addEventListener("click", function () {
    card.remove();
  });

  image.addEventListener("click", function () {
    imageLink.src = element.link;
    imageLink.alt = element.name;
    imageName.textContent = element.name;
    openPopup(cardOpenPopup);
  });

  return card;
};

const renderCard = (card) => {
  elementsContainer.prepend(createCard(card));
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

formAdd.addEventListener("submit", addCard);

function clickLike(event) {
  event.target.classList.toggle("element__like_active");
}
