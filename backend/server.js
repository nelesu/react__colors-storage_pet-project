const db = require('./db');
const express = require('express');


let dbFile = require('./constants.js').databaseName;
let tableName = require('./constants.js').tableName;

const app = express();
const port = 5555;

app.use('/', (req, res, next) => {
  console.log(req.url, 'requested URL');
  next(); // без этого метода не обрабатывает краны(запросы?(пути??)) ниже
})

// let data = db.getAllColors(database, 'colors').then(data => {
//   console.log(data);
//   return data;
// });
// console.log(data);

app.get('/d', (req, res) => {
  res.send('d');
})

let dataO;
db.getAllColors(tableName).then(data => {
  dataO = data;
});

console.log(dataO);
app.get('/data', (req, res) => {
  res.json(dataO);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})