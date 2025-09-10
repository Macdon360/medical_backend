var db = require("../db/db");

module.exports.AddBrand = (name, p_image) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO brands (b_name, b_image) VALUES (?, ?)";
        db.query(query, [name, p_image], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}
