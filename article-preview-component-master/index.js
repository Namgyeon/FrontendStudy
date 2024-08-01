const shareBtn = document.querySelector("#share");
const shareBox = document.querySelector("#shareBox");

shareBtn.addEventListener("click", () => {
  if (shareBox.style.display === "flex") {
    shareBox.style.display = "none";
  } else {
    shareBox.style.display = "flex";
  }
});
