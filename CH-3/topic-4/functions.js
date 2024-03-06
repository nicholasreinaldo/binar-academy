function cookRice(rice, water) {
	console.log(`Now cooking ${rice} with ${water} ml`);
}

cookRice("Nasi Putih", 100);

function greetings(timeofDay) {
console.log("Hello, Good " + timeofDay);
}
greetings("Morning");

function multiMultiplication(a,b,c,d,e,f,g) {
}
console.log(a*b*c*d*e*f*g)

function print() {
	console.log("Hello")
}

function add (x,y) {
	return x + y;
}

function circleArea(radius) {
	const area = Math.PI * radius**2
	console.log(area);
}

function cylinderVolume(radius, height) {
	return circleArea(radius) * height
}

console.log(circleArea(7));
console.log(cylinderVolume(7,10));