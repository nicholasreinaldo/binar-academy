/*
Create a base class called Shape which has a method calculateArea().
Then, create two subclasses Circle and Rectangle that inherit from Shape. 
Each subclass should implement its own version of calculateArea().

Finally, create instances of Circle and Rectangle and demonstrate 
the usage of inheritance by calling calculateArea() on each instance.

*/

class Shape {
	// base implementation
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }

}

class Circle extends Shape {
		constructor(radius) {
        super();
        this.radius = radius;
    }

   	 calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }

}
 
const circle = new Circle(7);
console.log("Area of Circle:", circle.calculateArea()); 

const rectangle = new Rectangle(4, 6);
console.log("Area of Rectangle:", rectangle.calculateArea());