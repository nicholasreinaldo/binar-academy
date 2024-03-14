let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop();
myArray.push("Joko","Anwar");
for (let i = 0; i < myArray.length; i++) {
		myArray[i] = myArray[i]+" (" + i + ")";
} 
myString = myArray.join(" ")

console.log(myArray)
console.log(myString)