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

const cardsContainer = document.querySelector(".cards");

initialCards.forEach(function (item) {
  const card = document.querySelector("#cardTemplate").content.cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  cardTitle.textContent = item.name;
  cardImage.setAttribute("src", item.link);
  cardsContainer.append(card);
});

const LikeButton = document.querySelectorAll(".card__like-button");
LikeButton.forEach((item) => {
  item.addEventListener("click", function () {
    toggleLike(item);
  });
});

const deleteButton = document.querySelectorAll(".card__delete-button");
deleteButton.forEach((item) => {
  const CardItem = item.closest(".card");
  item.addEventListener("click", () => {
    CardItem.remove();
  });
});

const ProfilePopup = document.querySelector(".popup_edit-profile");
const EditProfileButton = document.querySelector(".profile__edit-button");
const CloseButton = document.querySelectorAll(".popup__button-close");
const UserName = document.querySelector(".profile__name");
const UserDescription = document.querySelector(".profile__description");
const FormElement = document.querySelector(".popup__form");
const NameInput = document.querySelector(".popup__input_name");
const AboutInput = document.querySelector(".popup__input_about");

function openPopUp(popup) {
  NameInput.value = UserName.innerText;
  AboutInput.value = UserDescription.innerText;
  popup.classList.add("popup_opened");
}
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
}

function toggleLike(like) {
  like.classList.toggle("card__like-button_active");
}

CloseButton.forEach((item) => {
  const PopUp = item.closest(".popup");
  item.addEventListener("click", function () {
    closePopUp(PopUp);
  });
});

EditProfileButton.addEventListener("click", function () {
  openPopUp(ProfilePopup);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  UserName.textContent = NameInput.value;
  UserDescription.textContent = AboutInput.value;
  closePopUp(ProfilePopup);
}

FormElement.addEventListener("submit", formSubmitHandler);

const AddCardPopup = document.querySelector(".popup_add-card");
const AddCardButton = document.querySelector(".profile__add-button");

AddCardButton.addEventListener("click", function () {
  openPopUp(AddCardPopup);
});

const CardTitleInput = document.querySelector(".popup__input_card-title");
const CardLinkInput = document.querySelector(".popup__input_card-link");
const FormAddCard = document.querySelector(".popup__form_create");

function addNewCard(evt) {
  evt.preventDefault();
  const card = document.querySelector("#cardTemplate").content.cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  cardTitle.textContent = CardTitleInput.value;
  cardImage.setAttribute("src", CardLinkInput.value);
  cardsContainer.prepend(card);
  CardTitleInput.value = "";
  CardLinkInput.value = "";
  const LikeButton = document.querySelector(".card__like-button");
  const deleteButton = document.querySelector(".card__delete-button");
  LikeButton.addEventListener("click", function () {
    toggleLike(LikeButton);
  });
  deleteButton.addEventListener("click", function () {
    const CardItem = deleteButton.closest(".card");
    CardItem.remove();
  });
  closePopUp(AddCardPopup);
}

FormAddCard.addEventListener("submit", addNewCard);

const ImagePopUp = document.querySelector(".popup_enlarge-image");
console.log(ImagePopUp);
