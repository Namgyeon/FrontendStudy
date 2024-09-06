const submit = document.querySelector("#submit");
function checkEmailValid(e) {
  const email = document.querySelector("#email");

  const errorMessage = document.querySelector("#errorMessage");
  const container = document.querySelector(".container");
  const subscribeContainer = document.querySelector(".subscribeContainer");

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
}

submit.addEventListener("click", checkEmailValid);

function checkScreenSize() {
  const Img = document.querySelector("#img");
  const mobileImg = document.querySelector("#mobileImg");

  if (window.innerWidth < 375) {
    Img.style.display = "none";
    mobileImg.style.display = "inline";
  } else {
    Img.style.display = "inline";
    mobileImg.style.display = "none";
  }
}

window.addEventListener("resize", checkScreenSize);
