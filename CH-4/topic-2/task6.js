// Task 6
// Write a program that filters out even numbers from an array of integers 
// using the .filter() method. The program should accept an array of integers 
// as input and create a new array containing only the even numbers.

// Input array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output array (even numbers only): [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumFilter = numbers.filter((numbers) => (numbers % 2 == 0));

console.log(evenNumFilter)