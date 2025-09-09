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