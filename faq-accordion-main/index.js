// h3또는 +버튼을 클릭하면 class가 추가된다.toggle로
// 클래스가 추가되면 숨겨진 내용이 나온다.
const questions = document.querySelectorAll(".que");
const plusButtons = document.querySelectorAll(".plusChange");
const texts = document.querySelectorAll(".text");

function toggleText(index) {
  texts[index].classList.toggle("none");
}

function toggleImage(index) {
  const img = plusButtons[index + 1];
  if (img.src.includes("icon-plus.svg")) {
    img.src = "./assets/images/icon-minus.svg";
  } else {
    img.src = "./assets/images/icon-plus.svg";
  }
}

plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    toggleText(index - 1);
    toggleImage(index - 1);
  });
});

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    toggleText(index);
    toggleImage(index);
  });
});
