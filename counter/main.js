// 버튼을 누르면 각 버튼에 따라 카운터의 값이 바뀐다.
let count = 0;
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#count");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
