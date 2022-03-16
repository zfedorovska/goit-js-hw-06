let inputEl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');
inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    let value = event.currentTarget.value;
    console.log(value);
    textEl.style.fontSize = value+"px";
}