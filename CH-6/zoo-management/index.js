const express = require("express");
const app = express();
const generateAnimals = require("./utils/seed");
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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})