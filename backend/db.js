let sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

let dbFile = require('./constants.js').databaseName;
let tableName = require('./constants.js').tableName;

let db = new sqlite3.Database(dbFile);
var dbExists = fs.existsSync(dbFile);

if (!dbExists) {
  // fs.openSync(dbFile, 'w');


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





// db.close();

function get(tableName, params = []) {
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
  })
}



// get(tableName).then(data => {
//   // console.log(data, 'fnsd 13.44');
// })


exports.getAllColors = get;