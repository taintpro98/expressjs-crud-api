var sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/sample.db', (err: any) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the sample database.');
});

export default db;

db.run("INSERT INTO items (name, price, description, image) VALUES ('Pizza', 299, 'Cheesy', 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png')");
// db.serialize(function () {
//     db.all("select name from sqlite_master where type='table'", function (err: any, tables: any) {
//         console.log(tables);
//     });
// });
// db.serialize(() => {
//     db.all("describe Items", (err: any, columns: any) => {
//         console.log(columns);
//     })
// });