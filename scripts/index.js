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

const ProfilePopup = document.querySelector(".popup");
const EditProfileButton = document.querySelector(".profile__edit-button");
const CloseProfileButton = document.querySelector(".popup__button-close");
const UserName = document.querySelector(".profile__name");
const UserDescription = document.querySelector(".profile__description");
const FormElement = document.querySelector(".popup__form");
const NameInput = document.querySelector(".popup__input_name");
const AboutInput = document.querySelector(".popup__input_about");

const LikeButton = document.querySelectorAll(".card__like-button");
LikeButton.forEach((item) => {
  item.addEventListener("click", function () {
    toggleLike(item);
  });
});

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

EditProfileButton.addEventListener("click", function () {
  openPopUp(ProfilePopup);
});
CloseProfileButton.addEventListener("click", function () {
  closePopUp(ProfilePopup);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  UserName.textContent = NameInput.value;
  UserDescription.textContent = AboutInput.value;
  closePopUp(ProfilePopup);
}

FormElement.addEventListener("submit", formSubmitHandler);
