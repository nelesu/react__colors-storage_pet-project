function getAllColors(dbFile, tableName) {
  return new Promise((resolve, reject) => {
    // const db = new sqlite3.Database(dbfale);
    const queries = [];
    db.each(`SELECT color as key, * FROM ${tableName}`, (err, row) => {
      if (err) {
        reject(err); // optional: you might choose to swallow errors.
      } else {
        queries.push(row); // accumulate the data
      }
    }, (err, n) => {
      if (err) {
        reject(err); // optional: again, you might choose to swallow this error.
      } else {
        resolve(queries); // resolve the promise
      }
    });
    // db.close();
  });
}



exports.getAllColors = getAllColors;