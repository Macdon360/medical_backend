var db = require("../db/db");

module.exports.ListProducts = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM product
        JOIN brand ON product.p_b_id = brand.b_id
        JOIN category ON product.p_c_id = category.c_id
        JOIN sub_category ON category.c_id = sub_category.sc_c_id
        LEFT JOIN offers ON category.c_id = offers.of_category AND CURDATE() BETWEEN offers.of_from AND offers.of_to
        ORDER BY product.p_id DESC`;
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}