let randomNumber = Math.floor(Math.random() * 10) + 1;

export function checkNumber(value) {
  if (value === randomNumber) {
    generateNewNumber();
    return "correct";
  }

  generateNewNumber();
  return "wrong";
}

function generateNewNumber() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
}