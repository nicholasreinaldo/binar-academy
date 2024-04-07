class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`Perimeter of ${this.name}: ${perimeter}`);
    }
  }
  
  // Creating a new instance of the Shape class called square
  /* const square = new Shape('square', 4, 5);
  square.calcPerimeter(); // Calling calcPerimeter() method on the instance
  
  // Creating a new instance of Shape called triangle
  const triangle = new Shape('triangle', 3, 3);
  triangle.calcPerimeter(); // Calling calcPerimeter() method on the instance */
  
  class Square extends Shape {
    constructor(sideLength) {
      super('square', 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength ** 2;
      console.log(`Area of ${this.name}: ${area}`);
    }
  }
  
  // Creating an instance of the Square class called square
  const square = new Square(5);
  square.calcPerimeter(); // Calling calcPerimeter() method
  square.calcArea(); // Calling calcArea() method
  