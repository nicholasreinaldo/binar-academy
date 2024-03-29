const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Vending Machine!");

const inventory = [
    { code: '1', name: 'Aqua', price: 15000, quantity: 12 },
    { code: '2', name: 'Sprite', price: 50000, quantity: 10 },
    { code: '3', name: 'Teh Botol', price: 30000, quantity: 5 },
    { code: '4', name: 'Coca Cola', price: 50000, quantity: 0 }
];

function displayInventory() {
    console.log('Available drinks:');
    inventory.forEach(item => {
        console.log(`Code: ${item.code} | Name: ${item.name} | Price: Rp. ${item.price} | Quantity: ${item.quantity}`);
    });
}

function selectItem() {
    rl.question('Enter the item code: ', (itemCode) => {
        const selectedItem = inventory.find(item => item.code === itemCode);
        if (selectedItem) {
            if (selectedItem.quantity > 0) {
                console.log(`You selected: ${selectedItem.name}`);
                insertMoney(selectedItem);
            } else {
                console.log('Sorry, this item is not available');
                selectItem();
            }
        } else {
            console.log('Item code error. Please try again.');
            selectItem();
        }
    });
}

let totalAmount = 0; 

function insertMoney(selectedItem) {
    rl.question('Please insert 10,000, 20,000, or 50,000 rupiah: ', (amount) => {
        const parsedAmount = parseInt(amount); 
        const validBills = [10000, 20000, 50000];
        if (isNaN(parsedAmount) || !validBills.includes(parsedAmount)) {
            console.log('Please only insert 10,000, 20,000, or 50,000 rupiah.');
            insertMoney(selectedItem);
        } else {
            totalAmount += parsedAmount;
            console.log(`Total amount inserted: Rp. ${totalAmount}`);
            if (totalAmount >= selectedItem.price) {
                console.log(`You have bought ${selectedItem.name}. Enjoy!`);
                selectedItem.quantity--;
            } else {
                console.log('Not enough money. Please insert more money.');
                insertMoney(selectedItem);
            }
        }
    });
}

displayInventory();
selectItem();
