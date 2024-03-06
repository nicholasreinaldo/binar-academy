// ### Task 1

// You are tasked to create a function to `show` todays date in DD/MM/YYYY format

// Answer 1

const options = { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric' 
}

function show() {
  const today = new Date().toLocaleDateString('id-id', options);
  return today;
}

console.log()

// Answer 2