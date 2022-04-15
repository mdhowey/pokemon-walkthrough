const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req,res) => {
  console.log('Home route hits.');
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});