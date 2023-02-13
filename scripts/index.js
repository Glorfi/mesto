let ProfilePopup = document.querySelector(".popup");
let EditProfileButton = document.querySelector(".profile__edit-button");
let CloseProfileButton = document.querySelector(".popup__button-close");
let UserName = document.querySelector(".profile__name");
let UserDescription = document.querySelector(".profile__description");
let FormElement = document.querySelector(".popup__form");

let NameInput = document.querySelector(".popup__input_name");
let AboutInput = document.querySelector(".popup__input_about");

NameInput.value = UserName.innerText;
AboutInput.value = UserDescription.innerText;

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
  UserName.textContent = NameInput.value;
  UserDescription.textContent = AboutInput.value;
  closePopUp(ProfilePopup);
}

FormElement.addEventListener("submit", formSubmitHandler);
