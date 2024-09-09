const button = document.querySelector(".arrowContainer");
const yearsResult = document.querySelector("#yearsResult");
const monthsResult = document.querySelector("#monthsResult");
const daysResult = document.querySelector("#daysResult");

button.addEventListener("click", () => {
  const day = parseInt(document.querySelector("#day").value);
  const month = parseInt(document.querySelector("#month").value);
  const year = parseInt(document.querySelector("#year").value);

  const label = document.querySelectorAll("label");

  const errorMessage = document.querySelectorAll(".errorMessage");

  if (isNaN(day)) {
    errorMessage[0].style.display = "inline";
    label[0].style.color = "red";
  } else {
    errorMessage[0].style.display = "none";
    label[0].style.color = "hsl(0, 1%, 44%)";
  }
  if (isNaN(month)) {
    errorMessage[1].style.display = "inline";
    label[1].style.color = "red";
  } else {
    errorMessage[1].style.display = "none";
    label[1].style.color = "hsl(0, 1%, 44%)";
  }
  if (isNaN(year)) {
    errorMessage[2].style.display = "inline";
    label[2].style.color = "red";
  } else {
    errorMessage[2].style.display = "none";
    label[2].style.color = "hsl(0, 1%, 44%)";
  }

  cal();
});

// 계산 함수
function cal() {
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const calYear = currentYear - year.value;
  const calMonth = currentMonth - month.value;
  const calDay = currentDay - day.value;

  yearsResult.textContent = calYear;
  monthsResult.textContent = calMonth;
  daysResult.textContent = calDay;
}
// document
//   .querySelector(".arrowContainer")
//   .addEventListener("click", calculateAge);

// function calculateAge() {
//   const day = parseInt(document.getElementById("day").value);
//   const month = parseInt(document.getElementById("month").value);
//   const year = parseInt(document.getElementById("year").value);

//   if (isNaN(day) || isNaN(month) || isNaN(year)) {
//     alert("Please enter a valid date.");
//     return;
//   }

//   const birthDate = new Date(year, month - 1, day);
//   const today = new Date();

//   if (birthDate > today) {
//     alert("The birth date cannot be in the future.");
//     return;
//   }

//   let ageYears = today.getFullYear() - birthDate.getFullYear();
//   let ageMonths = today.getMonth() - birthDate.getMonth();
//   let ageDays = today.getDate() - birthDate.getDate();

//   // If the birth month and day haven't occurred yet this year, subtract 1 year
//   if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
//     ageYears--;
//     ageMonths += 12;
//   }

//   // If the birth day hasn't occurred yet in the current month, subtract 1 month
//   if (ageDays < 0) {
//     const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//     ageDays += lastMonth.getDate(); // Add the days from the previous month
//     ageMonths--;
//   }

//   // Update the result display
//   document.getElementById("yearsResult").textContent = ageYears;
//   document.getElementById("monthsResult").textContent = ageMonths;
//   document.getElementById("daysResult").textContent = ageDays;
// }
