const mysql = require('mysql');
const {db_auth} = require('../config');

export const mysql_db = mysql.createConnection({
    host: db_auth.DB_HOST,
    user: db_auth.DB_USER,
    password: db_auth.DB_PASSWORD,
    database: db_auth.DB_NAME
});

export function connect_mysql(){
    mysql_db.connect((error) =>{
        if(error)
            console.log(error);
        else
            console.log('Connected to MySQL');
    });
};