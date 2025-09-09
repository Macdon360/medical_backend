var model = require("../model/listproducts");

module.exports.ListProducts = async (req, res) => {
    try {
        const products = await model.ListProducts();
        if (!products || products.length === 0) {
            return res.status(404).json({ result: false, message: "No products found" });
        }
        return res.json({ result: true, products: products });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }   
}