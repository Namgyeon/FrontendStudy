const errorIcon = document.querySelector(".error");

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("invalid", () => {
    document.forms[0].classList.add("was-vaildated");
  });
});
