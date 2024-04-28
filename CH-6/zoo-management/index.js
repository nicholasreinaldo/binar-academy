const express = require("express");
const app = express();
const generateAnimals = require("./utils/seed");
const Animal = require("./models/animal")
const port = 3000;

let animals = generateAnimals();

app.get("/animals", (req,res) => res.json(animals));
app.get("/animals/:id", (req,res) => {
    const animalId = parseInt(req.params.id);
    const animal = animals.find((animal) => animal.id === animalId);

    if (!animal) {
        return res.status(404).json({ error: "Animal not found"});
    }
    res.json(result);
});

app.post("/animals", (req,res) => {
    const { name, species, classification} = req.body;
    if(!name || !species || !classification) {
        return res.status(400).json({error: "missing required fileds"})
    }
    const animal = new Animal(name, species, classification);
    animals.push(animal)
    res.status(201).json(animal);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})