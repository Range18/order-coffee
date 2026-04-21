const form = document.querySelector("form");
const addButton = document.querySelector(".add-button");

function updateBeverages() {
  const beverages = form.querySelectorAll(".beverage");
  const canRemove = beverages.length > 1;

  beverages.forEach((beverage, index) => {
    beverage.querySelector(".beverage-count").textContent = `Напиток №${index + 1}`;
    beverage.querySelector(".remove-button").disabled = !canRemove;
    beverage.querySelectorAll('input[type="radio"]').forEach((input) => input.name = `milk-${index + 1}`);
    beverage.querySelector(".remove-button").onclick = () => {
      if (canRemove) {
        beverage.remove();
        updateBeverages();
      }
    };
  });
}

addButton.addEventListener("click", () => {
  const beverages = form.querySelectorAll(".beverage");
  const newBeverage = beverages[beverages.length - 1].cloneNode(true);

  addButton.closest("div").before(newBeverage);
  updateBeverages();
});

updateBeverages();
