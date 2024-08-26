const ftype = document.querySelector("#ftype");
const ltype = document.querySelector("#ltype");

const typeBoxes = document.querySelectorAll(".typeBox");
const leftTypeBox = document.querySelector("#leftTypeBox");
const rightTypeBox = document.querySelector("#rightTypeBox");

typeBoxes.forEach((box) => {
  box.addEventListener("change", () => {
    const ftypeCheck = ftype.checked;
    const ltypeCheck = ltype.checked;
    if (ftypeCheck) {
      leftTypeBox.style.backgroundColor = "green";
    } else {
      leftTypeBox.style.backgroundColor = "white";
    }

    if (ltypeCheck) {
      rightTypeBox.style.backgroundColor = "green";
    } else {
      rightTypeBox.style.backgroundColor = "white";
    }
  });
});

// name Input 유효성 검사
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const types = document.querySelectorAll('input[name="type"]');
const textarea = document.querySelector("#textarea");
const check = document.querySelector("#check");
const success = document.querySelector(".successfulSubmit");

const emailErrorMessage = document.querySelector("#email-error-message");
const nameErrorMessage = document.querySelectorAll(".name-error-message");
const typeErrorMessage = document.querySelector("#type-error-message");
const textareaErrorMessage = document.querySelector("#message-error-message");
const checkErrorMessage = document.querySelector("#check-error-message");

function nameCheck() {
  let isValid = true;

  if (!fname.value) {
    nameErrorMessage[0].style.display = "block";
    isValid = false;
  } else {
    nameErrorMessage[0].style.display = "none";
  }

  if (!lname.value) {
    nameErrorMessage[1].style.display = "block";
    isValid = false;
  } else {
    nameErrorMessage[1].style.display = "none";
  }

  if (!email.value.includes("@")) {
    emailErrorMessage.style.display = "block";
    isValid = false;
  } else {
    emailErrorMessage.style.display = "none";
  }
  //오류
  let isRadioChecked = false;
  types.forEach((type) => {
    if (type.checked) {
      isRadioChecked = true;
    }
  });

  if (!isRadioChecked) {
    typeErrorMessage.style.display = "block";
    isValid = false;
  } else {
    typeErrorMessage.style.display = "none";
  }

  if (!textarea.value) {
    textareaErrorMessage.style.display = "block";
    isValid = false;
  } else {
    textareaErrorMessage.style.display = "none";
  }

  if (!check.checked) {
    checkErrorMessage.style.display = "block";
    isValid = false;
  } else {
    checkErrorMessage.style.display = "none";
  }

  if (isValid) {
    success.style.display = "flex";
  } else {
    success.style.display = "none";
  }
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", nameCheck);
