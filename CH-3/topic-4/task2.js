// ### Task 2

// You are tasked to create a function to calculate BMI that accepts `weight` 
// and `height` as parameters and show the calculated BMI

function calculateBmi(weight,height) {
    let bmi = weight/((height/100)**2);
    console.log((bmi).toFixed(1));
  }
  calculateBmi(69,171)