const hiddenText = document.querySelector("p");
document.querySelector("button").addEventListener("click", (e) => {
  hiddenText.classList.toggle("hide");
});
