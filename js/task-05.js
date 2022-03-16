let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value == "")
        outputEl.textContent = "Anonymous"
    else
        outputEl.textContent = event.currentTarget.value;
}

