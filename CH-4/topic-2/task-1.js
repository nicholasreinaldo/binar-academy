// Task 5

function convertCelcius(temperature) {
    return (temperature*9/5)+32;
}

const inputCelcius = [0, 20, 37, 100];
const outputFahrenheit = inputCelcius.map(convertCelcius);

console.log(outputFahrenheit)

// Task 6

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumFilter = numbers.filter((numbers) => (numbers % 2 == 0));

console.log(evenNumFilter)