// 모든 버튼을 선택
const buttons = document.querySelectorAll(".btn");
const ratingContainer = document.querySelector(".ratingContainer");
const thankContainer = document.querySelector(".thankContainer");
const submit = document.querySelector("#sub");
let result = document.querySelector("#score");
let selectedButton = null;
let selectedRating = null;

function handleClick(event) {
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }

  selectedButton = event.target;

  selectedButton.classList.add("selected");
  selectedRating = selectedButton.innerText;
}

// submit버튼을 클릭하면 화면전환이 이루어지고 점수가 표기 된다.
function submitEvent() {
  if (selectedRating) {
    ratingContainer.classList.add("none");
    thankContainer.classList.remove("none");

    result.innerText = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

submit.addEventListener("click", submitEvent);
