const initialCards = [
  {
    name: "Татев",
    link: "./images/Tatev.jpg",
  },
  {
    name: "Сортавала",
    link: "./images/Sortavala.JPG",
  },
  {
    name: "Шепелевский Маяк",
    link: "./images/shepelev_light_house.JPG",
  },
  {
    name: "Чегем",
    link: "./images/chegem.JPG",
  },
  {
    name: "Баренцево Море",
    link: "./images/barents_sea.JPG",
  },
  {
    name: "Кандалакша",
    link: "./images/kandalaksha.JPG",
  },
];

const cardsContainer = document.querySelector(".cards");

function createInitialCard(item) {
  const card = document.querySelector("#cardTemplate").content.cloneNode(true);
  // Эти переменные должны лежать внутри функции, если их вытащить то
  // когда мы применим эту функцию к массиву будет отрисована только последняя карточка
  const cardItem = card.querySelector(".card");
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  const likeButton = card.querySelector(".card__like-button");
  const deleteButton = card.querySelector(".card__delete-button");
  cardTitle.textContent = item.name;
  cardImage.setAttribute("src", item.link);
  cardImage.setAttribute("alt", `Картинка ${item.name}`);
  cardsContainer.append(card);
  // использование метода prepend загрузит карточки в реверсивном порядке относительно массива
  likeButton.addEventListener("click", () => {
    toggleLike(likeButton);
  });
  deleteButton.addEventListener("click", () => {
    cardItem.remove();
  });
}

initialCards.forEach(createInitialCard);

const profilePopup = document.querySelector(".popup_edit-profile");
const editProfileButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__button-close");
const userName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const profileEditForm = document.querySelector(".popup__form_edit-profile");
const nameInput = document.querySelector(".popup__input_name");
const aboutInput = document.querySelector(".popup__input_about");

const addCardPopup = document.querySelector(".popup_add-card");
const addCardButton = document.querySelector(".profile__add-button");

const cardTitleInput = document.querySelector(".popup__input_card-title");
const cardLinkInput = document.querySelector(".popup__input_card-link");
const formAddCard = document.querySelector(".popup__form_create");

const imagePopUp = document.querySelector(".popup_enlarge-image");
const cardImage = document.querySelectorAll(".card__image");

function openProfilePopUp(popup) {
  nameInput.value = userName.textContent;
  aboutInput.value = userDescription.textContent;
  popup.classList.add("popup_opened");
}
function openPopUp(popup) {
  popup.classList.add("popup_opened");
}
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
}

function toggleLike(like) {
  like.classList.toggle("card__like-button_active");
}

function submitProfileEditForm(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userDescription.textContent = aboutInput.value;
  closePopUp(profilePopup);
}

function addNewCard(evt) {
  evt.preventDefault();
  const card = document.querySelector("#cardTemplate").content.cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  const likeButton = card.querySelector(".card__like-button");
  const deleteButton = card.querySelector(".card__delete-button");
  cardTitle.textContent = cardTitleInput.value;
  cardImage.setAttribute("src", cardLinkInput.value);
  cardImage.setAttribute("alt", `Картинка ${cardTitleInput.value}`);
  cardsContainer.prepend(card);
  cardTitleInput.value = "";
  cardLinkInput.value = "";
  likeButton.addEventListener("click", function () {
    toggleLike(likeButton);
  });
  deleteButton.addEventListener("click", function () {
    const cardItem = deleteButton.closest(".card");
    cardItem.remove();
  });
  cardImage.addEventListener("click", function () {
    openImage(cardImage);
  });
  closePopUp(addCardPopup);
}

function openImage(cardImage) {
  openPopUp(imagePopUp);
  const ImagePopUpTitle = document.querySelector(".popup__imagename");
  const ActiveImage = cardImage.closest(".card__image");
  const ActiveCard = cardImage.closest(".card");
  const ActiveCardTitle = ActiveCard.querySelector(".card__title");
  const LargeImage = document.querySelector(".popup__image");
  LargeImage.src = ActiveImage.src;
  ImagePopUpTitle.textContent = ActiveCardTitle.textContent;
}

closeButtons.forEach((item) => {
  const PopUp = item.closest(".popup");
  item.addEventListener("click", function () {
    closePopUp(PopUp);
  });
});

editProfileButton.addEventListener("click", function () {
  openProfilePopUp(profilePopup);
});
profileEditForm.addEventListener("submit", submitProfileEditForm);

addCardButton.addEventListener("click", function () {
  openPopUp(addCardPopup);
});
formAddCard.addEventListener("submit", addNewCard);

cardImage.forEach((item) => {
  item.addEventListener("click", function () {
    openImage(item);
  });
});
