const num = document.querySelector("#num");
const comments = document.querySelectorAll(".comment");
const mark = document.querySelector("#mark");

const readCheck = () => {
  let count = 0;
  comments.forEach((comment) => {
    if (comment.classList.contains("read")) {
      comment.style.backgroundColor = "white";
    } else {
      count++;
    }
  });
  num.textContent = count;
};

readCheck();

mark.addEventListener("click", () => {
  comments.forEach((comment) => {
    comment.classList.add("read");
  });

  readCheck();
});
