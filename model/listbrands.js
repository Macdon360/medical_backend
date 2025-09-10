var db = require("../db/db");

module.exports.ListBrands = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM brands";
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}
