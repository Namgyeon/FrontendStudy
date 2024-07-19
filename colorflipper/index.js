const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getColor() {
  // i는 0~5사이의 숫자가 나오게 해야함. 랜덤으로
  const HexCode = [];
  for (let i = 0; i < 6; i++) {
    const colorNum = colors[Math.floor(Math.random() * 16)];
    HexCode.push(colorNum); //15까지)
  }

  return "#" + HexCode.join("");
}

btn.addEventListener("click", function () {
  const randomColor = getColor();
  // randomColor의 값을 background-color의 값에 넣어야함.
  document.main.style.backgroundColor = randomColor;
  // randomColor의 문자열을 텍스트로 span.color에 넣어어함.
  color.textContent = randomColor;
});
