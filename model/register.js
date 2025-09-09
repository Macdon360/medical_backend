var db = require("../db/db");

module.exports.Login = (username) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM users WHERE u_mail = ?";
        db.query(query, [username], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

module.exports.Register = (name, email, mobile, password) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO users (u_name, u_mail, u_mobile, u_password) VALUES (?, ?, ?, ?)";
        db.query(query, [name, email, mobile, password], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve({ id: results.insertId, name, email, mobile });
        });
    });
}