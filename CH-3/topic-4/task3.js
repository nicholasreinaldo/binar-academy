// ### Task 3

// You are tasked to create a function that returns the acronym of the sentence given

// ```jsx
// // Example
// Input: "Harry Potter"
// Output: "HP"
// ```

function acronym(name) {
  return name[0];
}

console.log(acronym("Harry"))

// Arrow function version

const acronym = name => {
  return name[0];
}

console.log(acronym("Harry"))
