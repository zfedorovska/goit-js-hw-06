let boxesEl = document.querySelector('#boxes');
let inputEl = document.querySelector('input');
let createButton = document.querySelector('[data-create]');
let destroyButton = document.querySelector('[data-destroy]');
createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateButtonClick(){
  let amount = document.querySelector('input').value;
  createBoxes(amount);  
}

function onDestroyButtonClick(){
  let elements = Array.from(boxesEl.children);
  elements.forEach(element => {
    element.remove();
  });
}

function createBoxes(amount) {
  console.log("we are in create boxes" + amount);
  let elements = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++){
    let element = document.createElement("div");
    element.style.width = width + "px";
    element.style.height = height + "px";
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
    width += 10;
    height += 10;
  }
  boxesEl.append(...elements); 
}


  
  
