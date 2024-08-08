const form = document.querySelector("form");
const email = document.querySelector("#email");
const error_message = document.querySelector("#error-message");

email.addEventListener("invalid", (event) => {
  event.preventDefault();
  error_message.style.display = "block";
});

email.addEventListener("input", () => {
  error_message.style.display = "none";
});
