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
  // Эти переменные должны лежать внутри функции, иначе
  // когда мы применим эту функцию к массиву будет отрисована только последняя карточка
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  cardTitle.textContent = item.name;
  cardImage.setAttribute("src", item.link);
  cardImage.setAttribute("alt", `Картинка ${item.name}`);
  cardsContainer.append(card);
}


initialCards.forEach(createInitialCard);

const ProfilePopup = document.querySelector(".popup_edit-profile");
const EditProfileButton = document.querySelector(".profile__edit-button");
const CloseButton = document.querySelectorAll(".popup__button-close");
const UserName = document.querySelector(".profile__name");
const UserDescription = document.querySelector(".profile__description");
const FormElement = document.querySelector(".popup__form");
const NameInput = document.querySelector(".popup__input_name");
const AboutInput = document.querySelector(".popup__input_about");
const likeButtons = document.querySelectorAll(".card__like-button");
const deleteButtons = document.querySelectorAll(".card__delete-button");

likeButtons.forEach((item) => {
  item.addEventListener("click", function () {
    toggleLike(item);
  });
});

deleteButtons.forEach((item) => {
  const CardItem = item.closest(".card");
  item.addEventListener("click", () => {
    CardItem.remove();
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
  cardImage.setAttribute("alt", `Картинка ${CardTitleInput.value}`);
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
  const CardImage = document.querySelector(".card__image");
  CardImage.addEventListener("click", function () {
    openImage(CardImage);
  });
  closePopUp(AddCardPopup);
}

FormAddCard.addEventListener("submit", addNewCard);

const ImagePopUp = document.querySelector(".popup_enlarge-image");
const CardImage = document.querySelectorAll(".card__image");

function openImage(CardImage) {
  openPopUp(ImagePopUp);
  const ImagePopUpTitle = document.querySelector(".popup__imagename");
  const ActiveImage = CardImage.closest(".card__image");
  const ActiveCard = CardImage.closest(".card");
  const ActiveCardTitle = ActiveCard.querySelector(".card__title");
  const LargeImage = document.querySelector(".popup__image");
  LargeImage.src = ActiveImage.src;
  ImagePopUpTitle.textContent = ActiveCardTitle.textContent;
}
CardImage.forEach((item) => {
  item.addEventListener("click", function () {
    openImage(item);
  });
});
