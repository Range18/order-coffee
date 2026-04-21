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

const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");
const modalText = document.querySelector(".modal-text");

function getBeverageWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "напиток";
  }

  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    return "напитка";
  }

  return "напитков";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const count = form.querySelectorAll(".beverage").length;

  modalText.textContent = `Вы заказали ${count} ${getBeverageWord(count)}`;
  modalOverlay.classList.remove("hidden");
});

modalClose.addEventListener("click", function () {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});
