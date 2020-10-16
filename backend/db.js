let sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

let dbFile = require('./constants.js').databaseName;
let tableName = require('./constants.js').tableName;

let db = new sqlite3.Database(dbFile);
var dbExists = fs.existsSync(dbFile);


fs.openSync(dbFile, 'w'); // ЧТО ЭТО


db.serialize(() => {

  db.run(`CREATE TABLE ${tableName} (type TEXT, color TEXT)`);

  let stmt = db.prepare(`INSERT INTO ${tableName} VALUES (?, ?)`);

  for (let i = 0; i < 10; i++) {
    let t = 'hex';

    let c = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    stmt.run(t, c);
  }
  stmt.finalize();

});



db.close();

function getAllColors(tableName, params = []) {
  let db = new sqlite3.Database(dbFile);

  return new Promise((resolve, reject) => {
    db.all(`SELECT color, * FROM ${tableName}`, params, (err, rows) => {
      if (err) {
        console.log(`Error running sql: SELECT color, * FROM ${tableName}`)
        console.log(err)
        reject(err)
      } else {
        resolve(rows)
      }
    })
    db.close();
  });

}
function addColor(tableName, color) {
  let db = new sqlite3.Database(dbFile);

  let stmt = db.prepare(`INSERT INTO ${tableName} VALUES (?, ?)`);
  let t = color.type;
  let c = color.color;
  stmt.run(t, c);
  stmt.finalize();

  db.close();
};

function deleteColor(tableName, color) {
  let db = new sqlite3.Database(dbFile);
  let c = color.color;

  db.run(`DELETE FROM ${tableName} WHERE color = ?`, [c]);

  db.close();
};




exports.getAllColors = getAllColors;
exports.addColor = addColor;
exports.deleteColor = deleteColor;