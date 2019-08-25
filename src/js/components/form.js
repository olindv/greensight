export default function Form() {
  const buttonPickup = document.querySelectorAll(".form__button-pickup");
  const buttonDelivery = document.querySelectorAll(".form__button-delivery");

  function getForm() {
    let formDelivery;
    let formPickup;
    if (window.innerWidth < 769) {
      formDelivery = document.querySelector(".form__adaptive");
      formPickup = document.querySelector(".form__adaptive--pickup");
    } else {
      formDelivery = document.querySelector(".form__delivery");
      formPickup = document.querySelector(".form__pickup");
    }
    return { formDelivery, formPickup };
  }

  buttonDelivery[0].addEventListener("click", function(event) {
    event.preventDefault();
    if (validateForm(getForm().formDelivery)) {
      console.log("xhr запрос доставка");
    }
  });
  buttonDelivery[1].addEventListener("click", function(event) {
    event.preventDefault();
    if (validateForm(getForm().formDelivery)) {
      console.log("xhr запрос доставка");
    }
  });

  buttonPickup[0].addEventListener("click", function(event) {
    event.preventDefault();
    if (validateCheckbox(getForm().formPickup)) {
      console.log("xhr запрос самовывоз");
    }
  });
  buttonPickup[1].addEventListener("click", function(event) {
    event.preventDefault();
    if (validateCheckbox(getForm().formPickup)) {
      console.log("xhr запрос самовывоз");
    }
  });

  function validateCheckbox(formRadio) {
    let valid = true;
    let err;
    if (window.innerWidth < 769) {
      err = document.querySelector(".error__radio--adaptive");
    } else {
      err = document.querySelector(".error__radio");
    }
    if (
      !formRadio.elements.pay[0].checked &&
      !formRadio.elements.pay[1].checked
    ) {
      valid = false;
      err.textContent = "Укажите пункт самовывоза";
    } else {
      err.textContent = "";
    }
    return valid;
  }
  function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
      valid = false;
    }

    if (
      validateField(form.elements.phone) &&
      form.elements.phone.value.length < 18
    ) {
      valid = false;
    }
    if (!validateField(form.elements.adress)) {
      valid = false;
    }
    if (!validateField(form.elements.comment)) {
      valid = false;
    }

    return valid;
  }

  function validateField(field) {
    if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      field.classList.add("input__invalid");
      return false;
    } else if (field.name === "phone" && field.value.length < 18) {
      field.nextElementSibling.textContent = "Заполните это поле.";
      field.classList.add("input__invalid");
      return false;
    } else {
      field.nextElementSibling.textContent = "";
      field.classList.remove("input__invalid");
      return true;
    }
  }

  window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call(document.querySelectorAll(".form__input-phone"), function(
      input
    ) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function(a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    });
  });
}
