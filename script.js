const screen = document.getElementById("screen");
function enterValue(input) {
  screen.value += input;
}
function calculateInput() {
  screen.value = eval(screen.value);
}

function erase() {
  screen.value = "";
}
