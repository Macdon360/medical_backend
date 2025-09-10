var model = require("../model/listbrands");


module.exports.ListBrands = async (req, res) => {
    try {
        const brands = await model.ListBrands();
        if (brands.length === 0) {
            return res.status(404).json({ result: false, message: "No brands found" });
        }
        return res.json({ result: true, brands: brands });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}