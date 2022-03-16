let counterValue = 0;
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
const valueElement = document.querySelector("#value");

incrementButton.addEventListener("click", () => {
    counterValue++;
    valueElement.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue--;
    valueElement.textContent = counterValue;
});