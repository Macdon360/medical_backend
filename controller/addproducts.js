var model = require("../model/addproducts");
var formidable = require("formidable");
const fs = require("fs");
const path = require("path");

module.exports.AddProducts = async (req, res) => {
    try {
        var date = Date.now();
        var form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(400).json({ result: false, message: "Error parsing form data" });
            }
            var { brand_id, p_name, p_description, p_price, p_category, p_for, p_how, p_generics, p_precaution, p_side_effects, p_drug_interactions, p_indication } = fields;
            var oldPath = files.p_image.filepath
            var newPath =
                process.cwd() + "/uploads/products/" + date + '_' + files.p_image.originalFilename.replaceAll(' ', '')
            let rawData = fs.readFileSync(oldPath);
            fs.writeFile(newPath, rawData, async function (err) {
                if (err) console.log(err);
                let filepathh = "uploads/products/" + date + '_' + files.p_image.originalFilename.replaceAll(' ', '')
                var p_image = filepathh
                if (!p_name || !p_description || !p_category || !p_image || !brand_id || !p_for || !p_how || !p_generics || !p_price || !p_precaution || !p_side_effects || !p_drug_interactions || !p_indication) {
                    return res.status(400).json({ result: false, message: "All fields are required" });
                }

                const newProduct = await model.AddProducts(brand_id, p_name, p_description, p_price, p_category, p_for, p_how, p_generics, p_precaution, p_side_effects, p_drug_interactions, p_indication, p_image);
                if (newProduct.affectedRows > 0) {
                    return res.status(201).json({ result: true, message: "Product added successfully" });
                } else {
                    return res.status(500).json({ result: false, message: "Failed to add product" });
                }

            });


        });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}