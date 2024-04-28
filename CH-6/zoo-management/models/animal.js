class Animal {
    static id = 0;
    constructor(name, species, classification) {
        this.id = ++this.constructor.id;
        this.name = name;
        this.species = species;
        this.classification = classification;
    }
}

module.exports = Animal;