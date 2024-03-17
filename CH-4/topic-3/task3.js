countdownSeconds = 10;

let i = 1;

while (i <= countdownSeconds) {
  if (i === countdownSeconds) {
    console.log(i);
    console.log("Time is up!");
  } else {
    console.log(i);
  }
  i++;
}

