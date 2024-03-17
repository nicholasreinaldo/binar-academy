// Write a function to find prime numbers up to 20 using nested loops. 
// Use a `for` loop to iterate through numbers from 2 to 20.
// Inside the loop, use another loop to check if the current number is prime. 
// Use the `break` statement to exit the inner loop if the number is not prime.

// The output will look like this
// "2 is prime."
// "3 is prime."
// "5 is prime."
// "7 is prime."
// "11 is prime."
// "13 is prime."
// "17 is prime."
// "19 is prime."

const firstNum = 2;
const lastNum = 20;

for (let i = firstNum; i < lastNum; i++) {
    if (i == 2) {
        console.log(i+" is prime.")
    } 
    for (let j = i; j < lastNum; j++) {
        if (j % 2 == 1) {
            console.log(j+" is prime.")
        } else {
         break;
        }
    }
    
}