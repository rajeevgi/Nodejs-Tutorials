const db = require('../config/database');

exports.addUser = (userData, callback) => {
    const sql = 'Insert into users (username, email, password, age) values (?,?,?,?)';
    db.query(sql, [userData.username, userData.email, userData.password, userData.age], callback);
}

