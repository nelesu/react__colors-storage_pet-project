const db = require('./db');
const express = require('express');


let dbFile = require('./constants.js').databaseName;
let tableName = require('./constants.js').tableName;

const app = express();
const port = 5555;


// let data = db.getAllColors(database, 'colors').then(data => {
//   console.log(data);
//   return data;
// });
// console.log(data);

app.get('/d', (req, res) => {
  res.send('d');
})

app.get('/data', (req, res) => {
  db.getAllColors(dbFile, tableName).then(data => {
    res.sendFile(data);
  });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})