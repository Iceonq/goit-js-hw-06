const categoriesCounter = categories.querySelectorAll("ul");
console.log(`Number of categories: ${categoriesCounter.length}`);

const headerName = categories.querySelectorAll("h2");

const itemSelector = document.querySelectorAll("#categories > li");

const itemCounter = itemSelector.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelector("ul").childElementCount}`);
});
