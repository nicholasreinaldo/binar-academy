let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

myArray.pop();
myArray.push('Harley', 'Joker');

const newArr = myArray.map((item, index) => {
	return `${item} (${index})`
});

const myString = newArr.join(" ");
console.log(myString);