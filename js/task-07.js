let inputEl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');
inputEl.addEventListener('input', onInputChange);
textEl.style.fontSize = inputEl.value + "px";

function onInputChange(event) {
    let value = event.currentTarget.value;
    textEl.style.fontSize = value+"px";
}