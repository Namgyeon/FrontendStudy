const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("#errorMessage");
const container = document.querySelector(".container");
const subscribeContainer = document.querySelector(".subscribeContainer");

submit.addEventListener("click", (e) => {
  emailValid = false;
  e.preventDefault();

  if (email.value.includes("@")) {
    emailValid = true;
  } else {
    email.style.borderColor = "red";
    email.style.backgroundColor = "hsl(4, 10%, 67%)";
    email.style.outline = "none";

    errorMessage.style.display = "block";
    email.classList.add("email-error");
  }

  if (emailValid) {
    container.style.display = "none";
    subscribeContainer.style.display = "block";
  }
});
