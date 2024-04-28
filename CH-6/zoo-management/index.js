const express = require("express");
const app = express();
const generateAnimals = require("./utils/seed");
const port = 3000;

let animals = generateAnimals();

app.get("/animals", (req,res) => res.json(animals));
app.get("/animals/:name", (req,res) => {
    const id = req.params.name;
    let result = {};
    for (let animal of animals) {
        if (animal.id === id) {
            result = animal;
            break;
        }
    }
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})