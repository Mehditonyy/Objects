const code = document.querySelector("code");
const me = { name: "Max", money: 0, dogs: 0, laptops: 0 };
const error = document.querySelector("#error");

function render() {
  code.textContent = JSON.stringify(me, null, 2); // Pretty-print JSON with indentation
  error.textContent = "";
}

const buyDogButton = document.querySelector("#buy-dog-button");
buyDogButton.addEventListener("click", function () {
  if (me.money < 100) {
    showError("You need $100 to buy a dog.");
    return;
  }
  me.money -= 100;
  me.dogs += 1;
  render();
});

const dogDiesButton = document.querySelector("#dog-dies-button");
dogDiesButton.addEventListener("click", function () {
  if (me.dogs === 0) {
    showError("You don't have a dog, it couldn't have died.");
    return;
  }
  me.dogs -= 1;
  render();
});

const earnMoneyButton = document.querySelector("#earn-money-button");
earnMoneyButton.addEventListener("click", function () {
  me.money += getRandomNumber(50, 200); // Earn money between $50 and $200
  render();
});

const buyLaptopButton = document.querySelector("#buy-laptop-button");
buyLaptopButton.addEventListener("click", function () {
  if (me.money < 1000) {
    showError("You need $1000 to buy a laptop.");
    return;
  }
  me.laptops += 1;
  me.money -= 1000;
  render();
});


function showError(message) {
  error.textContent = message;
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
