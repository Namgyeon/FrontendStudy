// 수량 버튼 변수
const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");
// Add to Cart 이벤트 변수
const addCartBtns = document.querySelectorAll(".addCart");

// minusButtons을 클릭하면 numElement.textContent의 값이 -1된다.
function handleMinusClick(event) {
  const quantity = event.target.closest(".quantitySelector");
  const numElement = quantity.querySelector(".num");
  let num = parseInt(numElement.textContent);
  if (num > 0) {
    numElement.textContent = num - 1;
  }
}

// plusButtons을 클릭하면 numElement.textContent의 값이 +1 된다.
function handlePlusClick(event) {
  const quantity = event.target.closest(".quantitySelector");
  const numElement = quantity.querySelector(".num");
  let num = parseInt(numElement.textContent);
  numElement.textContent = num + 1;
}

///이벤트

minusButtons.forEach((button) => {
  button.addEventListener("click", handleMinusClick);
});

plusButtons.forEach((button) => {
  button.addEventListener("click", handlePlusClick);
});

// Add to Cart 클릭시 버튼 전환
addCartBtns.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", (event) => {
    const quantitySelector =
      event.currentTarget.querySelector(".quantitySelector");
    quantitySelector.style.display = "flex";
  });
});
