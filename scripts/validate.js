function setEventListeners(form, inputList, button, inactiveButton, inputErrorLine, inputErrorText) {
  inputList.forEach((input) => {
    toggleButtonState(inputList, button, inactiveButton);
    input.addEventListener("input", function () {
      checkInputValidity(form, input, inputErrorLine, inputErrorText);
      toggleButtonState(inputList, button, inactiveButton);
    });
  });
}

function showInputError(formElement, inputElement, errorMessage, inputErrorLine, inputErrorText) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(inputErrorText);
  inputElement.classList.add(inputErrorLine);
  errorElement.textContent = errorMessage;
}
function hideInputError(formElement, inputElement, inputErrorLine, inputErrorText) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(inputErrorText);
  inputElement.classList.remove(inputErrorLine);
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement, inputErrorLine, inputErrorText) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorLine, inputErrorText);
  } else {
    hideInputError(formElement, inputElement, inputErrorLine, inputErrorText);
  }
}
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid || inputElement.value == "";
  });
}
function toggleButtonState(inputList, button, inactiveButton) {
  if (hasInvalidInput(inputList)) {
    button.classList.add(inactiveButton);
  } else {
    button.classList.remove(inactiveButton);
  }
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    const inactiveButton = config.inactiveButtonClass;
    const inputErrorLine = config.inputErrorClass;
    const inputErrorText = config.spanErrorTextClass;
    setEventListeners(form, inputList, button, inactiveButton, inputErrorLine, inputErrorText);
  });
}
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_error",
  spanErrorTextClass: "popup__input-type-error_active",
});
