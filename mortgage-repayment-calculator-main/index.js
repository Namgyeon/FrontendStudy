// 1.submit버튼을 누르면 화면의 none을 flex로 변경
// 3. type고른것의 데이터를 얻어서 고른것만 얻어서 데이터 추출
// 2.amount와 year, rate를 계산하여 화면에 숫자로 표시 함수 2개필요
//

const form = document.querySelector("form");
const beforeRightContainer = document.querySelector(".beforeRightContainer");
const rightContainer = document.querySelector(".rightContainer");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  beforeRightContainer.style.display = "none";
  rightContainer.style.display = "flex";

  const amountInput = document.querySelector("#amountInput");
  const termInput = document.querySelector("#termInput");
  const rateInput = document.querySelector("#rateInput");

  const repayRadio = document.querySelector("#repay");
  const interset = document.querySelector("#interset");
  const isRepayment = repayRadio.checked;
  const isInterset = interset.checked;

  const amount = amountInput.value;
  const term = termInput.value;
  const rate = rateInput.value;

  const repayValue = document.querySelector("#repayValue");
  const totalRepayValue = document.querySelector("#totalRepayValue");

  if (isRepayment) {
    repayValue.innerHTML = "₩" + amount * term;
  }

  if (isInterset) {
    totalRepayValue.innerHTML = "₩" + amount * term * rate;
  }
});
