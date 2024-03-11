/* function myFunction() {
console.log("hello");
} */


// Standard anonymous function

const hello = (function() {console.log("hello");});

/* const Hello = () => {
  console.log('Hello');
}
 */

function sayHello(callback) {
	callback();
}

sayHello(hello)