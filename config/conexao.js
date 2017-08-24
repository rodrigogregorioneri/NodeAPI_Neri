var mysql = require('mysql')

exports.getConection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    password: 'familiamenores0',
    user: 'root',
    database: 'neriapi'
})

