const nameInput = document.querySelector('input[placeholder="il suo nome"]');
const surnameInput = document.querySelector('input[placeholder="il suo cog"]');
const emailInput = document.querySelector('input[placeholder="e-mail"]');
const phoneInputField = document.querySelector("#phone");
const errorMsgPhone = document.querySelector("#error-msg-phone");

const inputs = [
  {
    input: nameInput,
    minLen: 3,
    errorMsg: "Il nome deve contenere almeno 3 caratteri",
  },
  {
    input: surnameInput,
    minLen: 3,
    errorMsg: "Il cognome deve contenere almeno 3 caratteri",
  },
  {
    input: emailInput,
    type: "email",
    errorMsg: "Inserisci un indirizzo email valido",
  },
];

const iti = window.intlTelInput(phoneInputField, {
  // initialCountry: "auto",
  // geoIpLookup: function (success, failure) {
  //   fetch("https://ipapi.co/json")
  //     .then((response) => response.json())
  //     .then((data) => success(data.country_code))
  //     .catch(() => failure());
  // },
  initialCountry: "ie",
  separateDialCode: true,
  loadUtils: () =>
    import(
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js"
    ),
});

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  inputs.forEach(({ input, minLen, type, errorMsg }) => {
    const errorBlock = input.nextElementSibling;

    if (!errorBlock || errorBlock.id !== "error-msg") {
      console.warn("Error block not found for input", input);
      return;
    }

    let error = "";

    if (input.value.trim() === "") {
      error = "Questo campo è obbligatorio";
    } else if (minLen && input.value.trim().length < minLen) {
      error = errorMsg;
    } else if (
      type === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
    ) {
      error = errorMsg;
    }
    if (iti.isValidNumber()) {
      errorMsgPhone.style.display = "none";
    } else {
      errorMsgPhone.style.display = "block";
      isValid = false;
    }

    if (error) {
      errorBlock.style.display = "block";
      errorBlock.textContent = error;
      isValid = false;
    } else {
      errorBlock.style.display = "none";
    }
  });

  if (isValid) {
    alert("Форма успешно отправлена!");
    this.submit();
  }
});
