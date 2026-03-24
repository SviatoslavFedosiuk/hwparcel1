import { checkNumber } from "./js/program";

const inputRef = document.querySelector(".input");
const buttonRef = document.querySelector(".btn");

buttonRef.addEventListener("click", () => {
  const value = Number(inputRef.value);

  if (value === 0) {
    inputRef.style.borderColor = "red";
    return;
  }

  const result = checkNumber(value);

  if (result === "correct") {
    inputRef.style.borderColor = "green";
  } else {
    inputRef.style.borderColor = "red";
  }
});