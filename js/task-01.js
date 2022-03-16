let categories = document.querySelector("ul#categories").children;
console.log("Number of categories: " + categories.length);
let categoriesArr = Array.from(categories)
categoriesArr.forEach((category) => {
    console.log("Category: " + category.querySelector("h2").textContent);
    console.log("Elements: " + category.querySelector("ul").children.length);
})