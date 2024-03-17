const cart = [
    { item: 'Laptop', price: 999 },
    { item: 'Headphones', price: 199 },
    { item: 'Mouse', price: 49 }
];

let totalPrice= 0

for (i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
}

console.log(totalPrice);
