const express = require('express');
const app = express();
const port = 3000;

// Buat sebuah http method get
app.get('/', (req,res) => res.send("Test"));

app.get('/binar', (req,res) => res.send("Hello world"));

app.listen(port,() => console.log(`Server is running at http://localhost:${port}`));
