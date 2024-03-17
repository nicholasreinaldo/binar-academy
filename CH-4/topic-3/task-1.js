// Task 5

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

// Task 6
lastNum = 10;
for (i = firstNum; i < lastNum; i++) {
    if (i % 2 !== 1){
        continue;
    } else {
        print(i);
    }
} 