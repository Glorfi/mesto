const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_error",
  spanErrorTextClass: "popup__input-type-error_active",
};

function setEventListeners(form, inputList, button, config) {
  const {inputErrorClass, spanErrorTextClass } = config;
  inputList.forEach((input) => {
    toggleButtonState(inputList, button);
    input.addEventListener("input", function () {
      checkInputValidity(form, input, inputErrorClass, spanErrorTextClass);
      toggleButtonState(inputList, button);
    });
  });
}

function showInputError(
  formElement,
  inputElement,
  errorMessage,
  inputErrorLine,
  inputErrorText
) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(inputErrorText);
  inputElement.classList.add(inputErrorLine);
  errorElement.textContent = errorMessage;
}

function hideInputError(
  formElement,
  inputElement,
  inputErrorLine,
  inputErrorText
) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(inputErrorText);
  inputElement.classList.remove(inputErrorLine);
  errorElement.textContent = "";
}

function checkInputValidity(
  formElement,
  inputElement,
  inputErrorLine,
  inputErrorText
) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorLine,
      inputErrorText
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorLine, inputErrorText);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid || inputElement.value == "";
  });
}

function toggleButtonState(inputList, button) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(button);
  } else {
    enableSubmitButton(button);
  }
}

function disableSubmitButton(button) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute("disabled", "true");
}

function enableSubmitButton(button) {
  button.classList.remove(config.inactiveButtonClass);
  button.disabled = false;
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    setEventListeners(form, inputList, button, config);
  });
}
enableValidation(config);
