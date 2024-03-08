const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sam@2024',
    database: 'projectcp',
    connectionLimit: 10

});

module.exports.getAllAccount = (callback) => {
    pool.query('SELECT * FROM accounts', (error, results, fields) => {
        if (error) {
            console.error('Error retrieving accounts:', error);
            callback(error, null); // Pass error to the callback
            return;
        }
        callback(null, results); // Pass results to the callback
    });
};
