/* let finalResult;

// Add your code here

let firstNum = 20;
let secondNum = 5;
let thirdNum =  7;
let fourthNum = 12;

let firstResult = firstNum * secondNum;
let secondResult = fourthNum - thirdNum;
finalResult = firstResult * secondResult;


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;

section.appendChild(para1);


 */
// Task 2

// Final result should be 4633.33
// Add/update your code here

let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result *= result2;

const finalResult = result.toFixed(2);

console.log(typeof finalResult);
const finalNumber = Number(finalResult);
console.log(finalNumber);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);