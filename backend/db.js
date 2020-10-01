let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:');

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



const getAllColors = async () => {

  let promise = new Promise((res, rej) => {
    let result = [];
    db.each("SELECT color, type FROM colors", function (err, row) {
      console.log(row.color, row.type);
      result.push({ type: row.type, color: row.color });
    });
    res(result);
  })

  let b = await promise;
  console.log(b, 'b');
  return b;
};

console.log(getAllColors());


db.close();