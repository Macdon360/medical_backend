var db = require("../db/db");

module.exports.CheckSubcribe = (email) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM subscribe WHERE s_email = ?";
        db.query(query, [email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        }
        );
    });
}

module.exports.AddSubcribe = (email) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO subscribe (s_email) VALUES (?)";
        db.query(query, [email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}