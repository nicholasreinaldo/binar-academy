// // Example 1
// Input:
// First Name: John
// Last Name: Doe

// Output:
// Hello, John Doe!

// // Example 2
// Input:
// First Name: Alice

// Output:
// Hello, Alice!

const firstName = "John";
const lastName = "";

const test = !lastName
    ? `Hello, ${firstName}!`
    : `Hello, ${firstName} ${lastName}!`;

console.log(test);
