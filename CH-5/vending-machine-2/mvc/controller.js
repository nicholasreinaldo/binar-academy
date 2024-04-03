const readline = require("readline");
const { inventory } = require("./model");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalMoney = 0;
let selectedItem = null;

function selectItem() {
  rl.question(
    "Enter the code of the item you want to purchase (e.g., A1, B2): ",
    (code) => {
      selectedItem = inventory.find((item) => item.code === code.toUpperCase());
      if (!selectedItem) {
        console.log("Invalid item code. Please enter a valid code.");
        selectItem();
        return;
      } else if (selectedItem.quantity === 0) {
        console.log(
          "Sorry, this item is out of stock. Please choose another item."
        );
        selectItem();
        return;
      }
      console.log(
        `You've selected: ${selectedItem.name} - Rp${selectedItem.price}`
      );
      if (totalMoney >= selectedItem.price) {
        processTransaction();
        return;
      }
      insertMoney();
    }
  );
}

function insertMoney() {
  rl.question("Insert money (in Rp): ", (money) => {
    money = parseInt(money);
    if (isNaN(money) || !availableDenominations.includes(money)) {
      console.log(
        "Invalid denomination. Please insert valid money (10,000 / 20,000 / 50,000)."
      );
      insertMoney();
    } else {
      totalMoney += money;
      console.log(`Total money inserted: Rp${totalMoney}`);
      if (totalMoney >= selectedItem.price) {
        processTransaction();
      } else {
        console.log(
          `Remaining amount needed: Rp${selectedItem.price - totalMoney}`
        );
        insertMoney();
      }
    }
  });
}

function processTransaction() {
  const change = totalMoney - selectedItem.price;
  console.log(`Transaction successful! Enjoy your ${selectedItem.name}.`);
  if (change > 0) {
    console.log(`Your change: Rp${change}`);
  }
  selectedItem.quantity--;
  totalMoney -= selectedItem.price;
  displayInventory();
  promptNextAction();
}

function promptNextAction() {
  rl.question("Do you want to make another purchase? (yes/no): ", (answer) => {
    if (answer.toLowerCase() === "yes") {
      displayInventory();
      selectItem();
    } else if (answer.toLowerCase() === "no") {
      console.log("Thank you for using the vending machine. Have a great day!");
      rl.close();
    } else {
      console.log('Invalid input. Please enter "yes" or "no".');
      promptNextAction();
    }
  });
}

module.exports = {
  selectItem,
};