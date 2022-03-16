let inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    let symbols = event.currentTarget.value;
    let length = +inputEl.dataset.length;
    if (symbols.length === length) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}