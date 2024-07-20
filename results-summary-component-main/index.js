async function getScore() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("파일에서 데이터를 불러오는데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("불러오는데 실패", error);
  }
}

function displayScore(data) {
  data.forEach((item) => {
    const elementId = item.category;
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = item.score;
    }
  });
}

function avgScore(data) {
  let sum = 0;
  const avg = document.getElementById("p1");
  for (let i = 0; i < data.length; i++) {
    sum += data[i].score;
  }
  sum = sum / data.length;
  avg.textContent = sum.toFixed(0);
}

document
  .getElementById("continueButton")
  .addEventListener("click", async () => {
    const data = await getScore();
    if (data) {
      displayScore(data);
      avgScore(data);
    }
  });

// function updateScore(data) {
//   data.forEach((item) => {
//     const elementId = item.category;
//     const element = document.getElementById(elementId);
//     if (element) {
//       element.textContent = item.score;
//     }
//   });
// }

// document
//   .getElementById("continueButton")
//   .addEventListener("click", async () => {
//     const data = await getScore();
//     if (data) {
//       updateScore(data);
//     }
//   });
