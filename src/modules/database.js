'use strict'
import { createRequire } from 'module';
const require = createRequire('require')
const mysql = require('mysql')

//CREATE CONNECTION 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
});

db.connect((err) => {
    if(err) {throw err;}
    console.log("DB connection OK");
});

//create table if it dosen't exist
let sql = 'CREATE TABLE IF NOT EXISTS trackpoints (id INT, latitude FLOAT, longitude FLOAT, time VARCHAR(100))'

db.query(sql, (err, res) => {
    if(err) throw err;
    console.log("Table created.")
})

function getTime(msg) {
    console.log(msg)
}

export {getTime}