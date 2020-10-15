let sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

let dbFile = require('./constants.js').databaseName;

let db = new sqlite3.Database(dbFile);
var dbExists = fs.existsSync(dbFile);

if (!dbExists) {
  // fs.openSync(dbFile, 'w'); ЧТО ЭТО


  db.serialize(() => {

    db.run("CREATE TABLE colors (type TEXT, color TEXT)");

    let stmt = db.prepare("INSERT INTO colors VALUES (?, ?)");

    for (let i = 0; i < 10; i++) {
      let t = 'hex';
      let c = "#566561";
      stmt.run(t, c);
    }
    stmt.finalize();

  });
}


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
  })

}
function addColor(tableName, color) {
  let db = new sqlite3.Database(dbFile);

  let stmt = db.prepare(`INSERT INTO ${tableName} VALUES (?, ?)`);
  console.log(color, 5456);
  let t = color.type;
  let c = color.color;
  stmt.run(t, c);
  stmt.finalize();

  db.close();
}




exports.getAllColors = getAllColors;
exports.addColor = addColor;