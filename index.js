const form = document.querySelector("form");
const addButton = document.querySelector(".add-button");

function updateBeverageCount(beverage, index) {
  const title = beverage.querySelector(".beverage-count");

  if (title) {
    title.textContent = `Напиток №${index + 1}`;
  }
}

function updateBeverageFieldNames(beverage, index) {
  const radioInputs = beverage.querySelectorAll('input[type="radio"]');

  radioInputs.forEach((input) => {
    input.name = `milk-${index + 1}`;
  });
}

function createBeverageForm() {
  const beverages = form.querySelectorAll(".beverage");
  const lastBeverage = beverages[beverages.length - 1];
  const newBeverage = lastBeverage.cloneNode(true);

  updateBeverageCount(newBeverage, beverages.length);
  updateBeverageFieldNames(newBeverage, beverages.length);

  return newBeverage;
}

updateBeverageFieldNames(document.querySelector(".beverage"), 0);

addButton.addEventListener("click", () => {
  const newBeverage = createBeverageForm();

  addButton.closest("div").before(newBeverage);
});
