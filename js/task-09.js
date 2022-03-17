function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttonEl = document.querySelector('.change-color');
let spanColorEl = document.querySelector('.color');
let bodyEl = document.querySelector('body');
buttonEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColorEl.textContent = color;
}