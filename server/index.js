const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// const addNote = require('../database/controllers.js');

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
