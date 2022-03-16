function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttonEl = document.querySelector('.change-color');
let bodyEl = document.querySelector('body');
buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}