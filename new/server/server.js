const express = require('express');
const app = express();

const path = require('path');

const port = 3000;

app.get('/home', (req, res) => {
  res.send('Hello World from Node.js server!');
});

app.use(express.static(path.join(__dirname, '../dist/new/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/new/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});