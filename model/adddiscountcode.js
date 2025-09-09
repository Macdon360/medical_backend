var db = require("../db/db");

module.exports.CheckDiscountCode = (code) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM discount_code WHERE dc_code = ?";
        db.query(query, [code], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

module.exports.AddDiscountCode = (code, discount) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO discount_code (c_code, c_discount) VALUES (?, ?)";
        db.query(query, [code, discount], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}
