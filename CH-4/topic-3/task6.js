// Write a function to print numbers from 1 to 10, skipping even numbers. 
// Use a for loop to iterate through numbers from 1 to 10. 
// Use the continue statement to skip even numbers and print only odd numbers.
// 1
// 3
// 5
// 7
// 9

firstNum = 1;
lastNum = 10;
for (i = firstNum; i < lastNum; i++) {
    if (i % 2 == 1){
        continue;
    } else {
        print(i);
    }
} 