const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('test.db');
//console.log(db)
db.run('CREATE TABLE IF NOT EXISTS Groups(test1 TEXT NOT NULL,test2 TEXT NOT NULL)');
db.run('INSERT INTO Groups (test1,test2) VALUES (1,2),(2,3),(3,4),(4,5),(5,6),(6,7)');

db.all('SELECT * FROM Groups',[],(err,rows)=>{
    if(err){
        console.log(err);
    }
    //console.log(rows);
    rows.forEach((row)=>{
        //console.log(row);
        for(a in row){
            console.log(row[a]);
        }
    });
});