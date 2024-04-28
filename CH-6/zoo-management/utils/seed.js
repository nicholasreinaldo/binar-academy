const Animal = require("../models/animal")

function generateAnimals() {
    let animals = [];
    const duck = new Animal("Duck", "Avian", "Omnivore");
    const elephant = new Animal("Elephant", "Mammals", "Herbivore") 
    animals.push(duck);
    animals.push(elephant);

    return animals;
}

module.exports = generateAnimals