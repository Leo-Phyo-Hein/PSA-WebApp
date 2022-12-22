/*
-----------------------------------------------------------------------
IMPORT SQL
-----------------------------------------------------------------------
*/
var mysql = require('mysql')    

/*
-----------------------------------------------------------------------
SQL DATABASE CONNECTION TO SERVER
-----------------------------------------------------------------------
*/
var dbconnect = {
    getConnection: () => {
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "1qwer$#@!",     // Enter your own password from your MySQL Workstation
            database: "pon_db",
            multipleStatements: true,
            dateStrings: "true"
        })
        return connection
    }
}

/*
-----------------------------------------------------------------------
EXPORT OF DATABASE CONFIGURATIONS AND CONNECTION TO FUNCTION SCRIPTS
-----------------------------------------------------------------------
*/
module.exports = dbconnect  