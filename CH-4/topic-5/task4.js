const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }
  
  const cat2 = {
    name : 'Elfie',
    breed : 'Aphrodite Giant',
    color : 'ginger',
    greeting: function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }
  
  cat.greeting();
  cat2.greeting();

  function Cat(name,breed,color) {
    this.name = name;
    this.breed = breed,
    this.color = color,
    this.greeting = function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }