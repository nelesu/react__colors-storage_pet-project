const db = require('./db');
const express = require('express');
const cors = require('cors')

let tableName = require('./constants.js').tableName;

const app = express();
const port = 5555;


app.use(cors()) // Use this after the variable declaration
app.use(express.json()); // позволяет принимать json в req.body.value и конвертировать его в js object

app.use('/', (req, res, next) => {
  console.log(req.url, 'requested URL');
  next(); // без этого метода не обрабатывает краны(запросы?(пути??)) ниже
});


app.get('/d', (req, res) => {
  res.send('d');
})


app.get('/data', (req, res) => {
  db.getAllColors(tableName).then(data => {
    res.json(data);
  });
});

app.post('/addcolor', (req, res) => {
  let colorBody = req.body;
  console.log(colorBody, '/addcolor');
  db.addColor(tableName, colorBody);
});

app.post('/deletecolor', (req, res) => {
  let colorBody = req.body;
  console.log(colorBody, '/deletecolor');
  db.deleteColor(tableName, colorBody);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})