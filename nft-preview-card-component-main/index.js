const img = document.querySelector("#equil");
const viewBox = document.querySelector(".viewBox");
const view = document.querySelector("#view");

viewBox.addEventListener("mousedown", () => {
  img.style.opacity = 0.5;
  viewBox.style.opacity = 0.4;
  view.style.opacity = 1;
});

viewBox.addEventListener("mouseup", () => {
  img.style.opacity = 1;
  viewBox.style.opacity = 0;
  iew.style.opacity = 0;
});
