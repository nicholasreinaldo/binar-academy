const { inventory } = require("./model");
const { selectItem } = require('./controller');

function displayInventory() {
  console.log("===============================");
  console.log("Vending Machine Inventory:");
  console.log("===============================");
  inventory.forEach((item) => {
    console.log(
      `${item.code}: ${item.name} - Rp${item.price} (${item.quantity} available)`
    );
  });
  console.log("===============================");
}

console.log("Welcome to the Vending Machine!");
displayInventory();
selectItem();