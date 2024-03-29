const calculation = require("./calculation");

const testAddition = calculation.addition(1,2);
const testSubstraction = calculation.substraction(1,2);
const testMultiplication = calculation.multiplication(1,2);
const testDivision = calculation.division(1,2);


console.log(testAddition);
console.log(testSubstraction);
console.log(testMultiplication);
console.log(testDivision);
console.log(testDivision);

const colors = require("colors");
console.log(colors.zebra("this code runs"))