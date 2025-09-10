var model = require("../model/addbrand");
var formidable = require('formidable');
var fs = require('fs');

module.exports.AddBrand = async (req, res) => {
    try {
        const { name } = req.body;
        var date = Date.now();
        var form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(400).json({ result: false, message: "Error parsing form data" });
            }
            const { name } = fields;
            if (!name) {
                return res.status(400).json({ result: false, message: "Brand name is required" });
            }
            var oldPath = files.b_image.filepath
            var newPath =
                process.cwd() + "/uploads/brands/" + date + '_' + files.b_image.originalFilename.replaceAll(' ', '')
            let rawData = fs.readFileSync(oldPath);
            fs.writeFile(newPath, rawData, async function (err) {
                if (err) {
                    return res.status(500).json({ result: false, message: err.message });
                }
                let filepathh = "uploads/brands/" + date + '_' + files.b_image.originalFilename.replaceAll(' ', '')
                var p_image = filepathh
                const brand = await model.AddBrand(name, p_image);
                if (brand.affectedRows === 0) {
                    return res.status(500).json({ result: false, message: "Failed to add brand" });
                }
                return res.json({ result: true, brand: brand });
            });
        });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}
