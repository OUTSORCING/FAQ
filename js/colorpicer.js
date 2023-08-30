const input = document.querySelector("input");
const colorBlock = document.querySelector(".color-block");
const hex = document.querySelector(".hex");
document.addEventListener("input", function (e) {
colorBlock.style.background = input.value;
hex.innerHTML = input.value;
});