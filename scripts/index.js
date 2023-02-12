let ProfilePopup = document.querySelector(".popup");
let EditProfileButton = document.querySelector(".profile__edit-button");
let CloseProfileButton = document.querySelector(".popup__button-close");
let UserName = document.querySelector(".profile__name");
let UserDescription = document.querySelector(".profile__description");
let formElement = document.querySelector(".popup__form");

function openPopUp(popup) {
  popup.classList.add("popup_opened");
}
function closePopUp(popup) {
  popup.classList.remove("popup_opened");
}

EditProfileButton.addEventListener("click", function () {
  openPopUp(ProfilePopup);
});
CloseProfileButton.addEventListener("click", function () {
  closePopUp(ProfilePopup);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__name");
  let aboutInput = document.querySelector(".popup__about");
  nameInput = nameInput.value;
  aboutInput = aboutInput.value;
  UserName.textContent = nameInput;
  UserDescription.textContent = aboutInput;
  closePopUp(ProfilePopup);
}

formElement.addEventListener("submit", formSubmitHandler);
