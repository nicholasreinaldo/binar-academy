const express = require("express");
const app = express();
const generateAnimals = require("./utils/seed");
const port = 3000;

let animals = generateAnimals();

app.get("/animals", (req,res) => res.json(animals));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})