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

popupCloseButtons.forEach((item) =>
  item.addEventListener("click", () => {
    const popup = item.closest(".popup");
    closePopup(popup);
  })
);

//popup edit
let formEdit = document.querySelector("form[name='form_edit']");

let nameInput = document.querySelector(".popup__input_type_username");
let descriptionInput = document.querySelector(".popup__input_type_decsription");
let usernameProfile = document.querySelector(".profile__username");
let descriptionProfile = document.querySelector(".profile__description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  usernameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(formEdit);
}

formEdit.addEventListener("submit", handleFormSubmit);

const initialCards = [
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
const imageLink = document.querySelector(".element__img");
const imageName = document.querySelector(".element__title");

const elementsContainer = document.querySelector(".elements");
const template = document.querySelector(".template");

const createCard = (element) => {
  const card = template.content.querySelector(".element").cloneNode(true);

  card.querySelector(".element__title").textContent = element.name;
  card.querySelector(".element__img").src = element.link;
  card.querySelector(".element__img").alt = element.name;

  card.querySelector(".element__like").addEventListener("click", likeActive);
  card.querySelector(".element__delete").addEventListener("click", function () {
    card.remove();
  });

  card.querySelector(".element__img").addEventListener("click", function () {
    imageLink.src = element.link;
    imageLink.alt = element.name;
    imageName.textContent = element.name;
    openPopup(cardOpenPopup);
  });

  return card;
};
// добавление  в контейнер
const renderCard = (card) => {
  elementsContainer.prepend(createCard(card));
};
// отображение на странице
initialCards.forEach((card) => {
  renderCard(card);
});

const addCard = (event) => {
  event.preventDefault();
  const cardLink = urlCardInput.value;
  const cardName = nameCardInput.value;
  renderCard({name: cardName, link: cardLink});

  urlCardInput.value = "";
  nameCardInput.value = "";
  closePopup(formAdd);
};

//popup add
let formAdd = document.querySelector("form[name='form_add']");
let nameCardInput = document.querySelector(".popup__input_type_name");
let urlCardInput = document.querySelector(".popup__input_type_url");

formAdd.addEventListener("submit", addCard);

// like
function likeActive(event) {
  event.target.classList.toggle("element__like_active");
}
