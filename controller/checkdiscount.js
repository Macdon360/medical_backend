var model = require("../model/checkdiscount");

module.exports.CheckDiscount = async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) {
            return res.status(400).json({ result: false, message: "Code is required" });
        }
        const discount = await model.CheckDiscountCode(code);
        if (discount.length === 0) {
            return res.status(404).json({ result: false, message: "Discount code is invalid" });
        }
        return res.json({ result: true, discount: discount });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}
