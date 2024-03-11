const operation = (num1, num2, callback) => {
    return callback(num1,num2);
}

const addition = function(num1,num2) {
    return num1 + num2;
}

const subtraction = function(num1,num2) {
    return num1 - num2;
}

const multiplication = function(num1,num2) {
    return num1 * num2;
}

const division = function(num1,num2) {
    if (num2 !== 0) {
        return num1 / num2;
    }
        return "Error: Cannot divide by zero!";
}

console.log(operation(2,2, addition))
console.log(operation(2,2, (num1,num2) => `this is ${num1} and ${num2}}`))