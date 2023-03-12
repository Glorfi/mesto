const cardsContainer = document.querySelector(".cards");
const card = document.querySelector("#cardTemplate");

const popUpOverlays = document.querySelectorAll(".popup");
const profilePopup = document.querySelector(".popup_type_profile-edit");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__button-close");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const profileEditForm = document.querySelector(".popup__form_edit-profile");
const nameInput = document.querySelector(".popup__input_name");
const aboutInput = document.querySelector(".popup__input_about");

const addCardPopup = document.querySelector(".popup_type_add-card");
const addCardButton = document.querySelector(".profile__add-button");

const cardTitleInput = document.querySelector(".popup__input_card-title");
const cardLinkInput = document.querySelector(".popup__input_card-link");
const formAddCard = document.querySelector(".popup__form_create");

const imagePopUp = document.querySelector(".popup_enlarge-image");
const imagePopUpTitle = document.querySelector(".popup__imagename");
const LargeImage = document.querySelector(".popup__image");

function openPopUp(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKey);
}
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function toggleLike(like) {
  like.classList.toggle("card__like-button_active");
}
function setInitialUserValues(userNameInput, userAboutInput) {
  userNameInput.value = userName.textContent;
  userAboutInput.value = userDescription.textContent;
}

function submitProfileEditForm(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userDescription.textContent = aboutInput.value;
  closePopUp(profilePopup);
}

function openImage(cardImage) {
  openPopUp(imagePopUp);
  const activeImage = cardImage.closest(".card__image");
  const activeCard = cardImage.closest(".card");
  const activeCardTitle = activeCard.querySelector(".card__title");
  LargeImage.src = activeImage.src;
  imagePopUpTitle.textContent = activeCardTitle.textContent;
}

function createCard(name, link) {
  const newCard = card.content.cloneNode(true);
  const cardItem = newCard.querySelector(".card");
  const cardTitle = newCard.querySelector(".card__title");
  const cardImage = newCard.querySelector(".card__image");
  const likeButton = newCard.querySelector(".card__like-button");
  const deleteButton = newCard.querySelector(".card__delete-button");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = `Картинка ${name}`;
  likeButton.addEventListener("click", () => {
    toggleLike(likeButton);
  });
  deleteButton.addEventListener("click", () => {
    cardItem.remove();
  });
  cardImage.addEventListener("click", () => {
    openImage(cardImage);
  });
  return newCard;
}

function addInitialCards(item) {
  const name = item.name;
  const link = item.link;
  const newCard = createCard(name, link);
  cardsContainer.append(newCard);
}

function addNewCard(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  const button = formAddCard.querySelector(config.submitButtonSelector);
  const newCard = createCard(name, link);
  cardsContainer.prepend(newCard);
  formAddCard.reset();
  closePopUp(addCardPopup);
  disableSubmitButton(button);
}

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedPopUp = document.querySelector(".popup_opened");
    closePopUp(openedPopUp);
  }
}

setInitialUserValues(nameInput, aboutInput);

closeButtons.forEach((item) => {
  const popUp = item.closest(".popup");
  item.addEventListener("click", () => {
    closePopUp(popUp);
  });
});

buttonEditProfile.addEventListener("click", () => {
  openPopUp(profilePopup);
});
profileEditForm.addEventListener(
  "submit",
  submitProfileEditForm,
  setInitialUserValues(nameInput, aboutInput)
);

addCardButton.addEventListener("click", () => {
  openPopUp(addCardPopup);
});

initialCards.forEach(addInitialCards);
formAddCard.addEventListener("submit", addNewCard);

popUpOverlays.forEach((popUp) => {
  popUp.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      console.log(evt.target);
      closePopUp(popUp);
    }
  });
});
