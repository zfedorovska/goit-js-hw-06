const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsElements = ingredients => {
  return ingredients.map(ingredient => {
    let element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    return element;
  });};
  
let ingredientElements = makeIngredientsElements(ingredients);
var ingredientsList = document.querySelector("ul#ingredients");
ingredientsList.append(...ingredientElements);