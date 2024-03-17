// Task 5
// F = (C×9/5)+32

// Input Celsius temperatures: [0, 20, 37, 100]
// Output Fahrenheit temperatures: [32, 68, 98.6, 212]

function convertCelcius(temperature) {
    return (temperature*9/5)+32;
}

const inputCelcius = [0, 20, 37, 100];
const outputFahrenheit = inputCelcius.map(convertCelcius);

console.log(outputFahrenheit)