let sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

let dbFile = require('./constants.js').databaseName;
let tableName = require('./constants.js').tableName;

let db = new sqlite3.Database(dbFile);
var dbExists = fs.existsSync(dbFile);


// utils
let uuid = require('./utils/uuid').uuid;
let randomHexColor = require('./utils/randomHexColor').randomHexColor;

fs.openSync(dbFile, 'w'); // ЧТО ЭТО


db.serialize(() => {

  db.run(`CREATE TABLE ${tableName} (type TEXT, color TEXT, id INT)`);

  let stmt = db.prepare(`INSERT INTO ${tableName} VALUES (?, ?, ?)`);

  for (let i = 0; i < 10; i++) {
    let t = 'hex';

    let c = randomHexColor();

    let i = uuid();
    stmt.run(t, c, i);
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
function addColor(tableName, colorBody) {
  let db = new sqlite3.Database(dbFile);

  let stmt = db.prepare(`INSERT INTO ${tableName} VALUES (?, ?, ?)`);
  let t = colorBody.type;
  let c = colorBody.color;
  let i = colorBody.id;
  stmt.run(t, c, i);
  stmt.finalize();

  db.close();
};

function deleteColorBody(tableName, color) {
  let db = new sqlite3.Database(dbFile);
  let i = color.id;

  db.run(`DELETE FROM ${tableName} WHERE id = ?`, [i]);

  db.close();
};




exports.getAllColors = getAllColors;
exports.addColor = addColor;
exports.deleteColorBody = deleteColorBody;