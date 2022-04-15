const express = require('express');

const app = express();

const PORT = 5000;

const pokemon = require('./pokemon');

app.get('/', (req,res) => {
  console.log(pokemon);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});