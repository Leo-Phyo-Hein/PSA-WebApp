/*
-----------------------------------------------------------------------
IMPORT DATABASE CONFIGURATIONS
-----------------------------------------------------------------------
*/
var db = require('./databaseConfig.js')

/*
-----------------------------------------------------------------------
DECLARATION OF pon DATABASE FUNCTION OBJECT
-----------------------------------------------------------------------
*/
var ponDB = {
    // Function to get all pons from the database
    getAllPons: (callback) => {
        // Establish a connection with the database
        var connection = db.getConnection()
        connection.connect((err) => {
            // If error from connection detected
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Connection established!")
                
                // SQL command to select all data from the pon table
                var sql = 'select * from pon_db.pon'
                console.log(`RUNNING COMMAND: ${sql}`)

                connection.query(sql, (err, result) => {
                    connection.end()
                    if (err) {
                        console.log(err)   
                        // Error detected, return callback function with error and null results
                        return callback(err, null)
                    } else {
                        // Result successfully retrieved and return callback with null error and result
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    getAllPons1: (callback) => {
        // Establish a connection with the database
        var connection = db.getConnection()
        connection.connect((err) => {
            // If error from connection detected
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Connection established!")
                
                // SQL command to select all data from the pon table
                var sql = 'select * from pon_db.pon where approval = "Approved"'
                console.log(`RUNNING COMMAND: ${sql}`)

                connection.query(sql, (err, result) => {
                    connection.end()
                    if (err) {
                        console.log(err)   
                        // Error detected, return callback function with error and null results
                        return callback(err, null)
                    } else {
                        // Result successfully retrieved and return callback with null error and result
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    getAllPons2: (driverNo, callback) => {
        // Establish a connection with the database
        var connection = db.getConnection()
        connection.connect((err) => {
            // If error from connection detected
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Connection established!")
                
                // SQL command to select all data from the pon table
                var sql = 'select * from pon_db.pon where driverNo = "A122"'
                console.log(`RUNNING COMMAND: ${sql}`)

                connection.query(sql, [driverNo], (err, result) => {
                    connection.end()
                    if (err) {
                        console.log(err)   
                        // Error detected, return callback function with error and null results
                        return callback(err, null)
                    } else {
                        // Result successfully retrieved and return callback with null error and result
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    // Function to add a new pon to the pon table
    addPon: (company_name, vehicle_number, driver_name, driverNo, item_details, image, userid, approval, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            // Check for errors
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Connection established!")
                // SQL Command to insert new row of values into sp_air.pon table
                var sql = "insert into pon_db.pon (company_name, vehicle_number, driver_name, driverNo, item_details, image, userid, approval) values (?, ?, ?, ?, ?, ?, ?, ?)"
                console.log(`RUNNING COMMAND: ${sql}`)
                connection.query(sql, [company_name, vehicle_number, driver_name, driverNo, item_details, image, userid, approval], (err, result) => {
                    connection.end()
                    // Second check of errors
                    if (err) {
                        console.log(err)
                        return callback(err, null)
                    } else {
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    // Function to retrieve a pon data by its ID
    getponByID: (ponid, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Connection established!")
                // Insert ponid into the SQL query to replace the ? sign
                var sql = "select idpon from pon_db.pon where userid = ?"
                console.log(`RUNNING COMMAND: ${sql}`)
                connection.query(sql, [ponid], (err, result) => {
                    connection.end()
                    if (err) {
                        console.log(err)
                        return callback(err, null)
                    } else {
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    getponByID2: (ponid, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                console.log("Connection established!")
                // Insert ponid into the SQL query to replace the ? sign
                var sql = "select * from pon_db.pon where idpon = ?"
                console.log(`RUNNING COMMAND: ${sql}`)
                connection.query(sql, [ponid], (err, result) => {
                    connection.end()
                    if (err) {
                        console.log(err)
                        return callback(err, null)
                    } else {
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    // Function to handle pon login information
    ponLogin: (ponname, password, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                // SQL Query to select pon information based on ponname and password
                var sql = "select ponid, ponname, role, driverNo from pon where ponname = ? and password = ?"
                connection.query(sql, [ponname, password], (err, result) => {
                    if (err) {
                        console.log(err)
                        return callback(err, null)
                    } if (result.length === 0) {
                        // Return null value if no result found
                        console.log("No results found!")
                        return callback(null, null)
                    } else {
                        // Return pon information (result[0])
                        console.log(result)
                        console.table(result)
                        return callback(null, result)
                    }
                })
            }
        })
    },

    // Function to update pon by ponid
    updatepon: (company_name, vehicle_number, driver_name, driverNo, item_details, file, id, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                    // SQL query to update pons by ponid
                    var sql = "update pon set company_name = ?, vehicle_number = ?, driver_name = ?, driverNo = ?, item_details = ?, image = ? where idpon = ?"
                    connection.query(sql, [company_name, vehicle_number, driver_name, driverNo, item_details, file, id], (err, result) => {
                        if (err) {
                            console.log(err)
                            return callback(err, null)
                        } else {
                            console.log(result)
                            console.table(result)
                            return callback(null, result)
                        }
                    })
            }
        })
    },

    approvepon: (approval, id, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                    // SQL query to update pons by ponid
                    var sql = "update pon set approval = ? where idpon = ?"
                    connection.query(sql, [approval, id], (err, result) => {
                        if (err) {
                            console.log(err)
                            return callback(err, null)
                        } else {
                            console.log(result)
                            console.table(result)
                            return callback(null, result)
                        }
                    })
            }
        })
    },

    removepon: (approval, id, callback) => {
        var connection = db.getConnection()
        connection.connect((err) => {
            if (err) {
                console.log(err)
                return callback(err, null)
            } else {
                    // SQL query to update pons by ponid
                    var sql = "delete from pon where idpon = ?"
                    connection.query(sql, [id], (err, result) => {
                        if (err) {
                            console.log(err)
                            return callback(err, null)
                        } else {
                            console.log(result)
                            console.table(result)
                            return callback(null, result)
                        }
                    })
            }
        })
    }
}

/*
-----------------------------------------------------------------------
EXPORT OF pon DATABASE FUNCTION OBJECT TO THE APP SCRIPT
-----------------------------------------------------------------------
*/
module.exports = ponDB