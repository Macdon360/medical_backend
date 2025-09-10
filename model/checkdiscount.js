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
