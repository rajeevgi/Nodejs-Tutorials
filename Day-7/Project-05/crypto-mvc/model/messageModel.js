const db = require('../config/database');

exports.saveMessage = (content, callback) => {
    const sql = 'Insert into messages (content) values (?)';
    db.query(sql, [content] ,callback);
}

exports.getMessageById = (id, callback) => {
    const sql = 'Select * from messages where id = ?';
    db.query(sql, [id], callback);
}