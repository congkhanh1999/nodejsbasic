import mysql from 'mysql2/promise'

//create connect to db
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
})

//simple query

export default pool