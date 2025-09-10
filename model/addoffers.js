var db = require("../db/db");

module.exports.AddOffers = (of_name, of_discount, of_category, of_from, of_to) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO offers (of_name, of_discount, of_category, of_from, of_to) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [of_name, of_discount, of_category, of_from, of_to], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}
