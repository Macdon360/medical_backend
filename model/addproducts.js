var db = require("../db/db");

module.exports.AddProducts = (brand_id,p_name, p_description, p_price, p_category, p_for, p_how, p_generics, p_precaution, p_side_effects, p_drug_interactions, p_indication, p_image) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO product (p_b_id,p_name, p_description, p_price, p_c_id, p_for, p_how, p_generics, p_precaution, p_side_effects, p_drug_interactions, p_indication, p_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(query, [brand_id,p_name, p_description, p_price, p_category, p_for, p_how, p_generics, p_precaution, p_side_effects, p_drug_interactions, p_indication, p_image], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}