var model = require("../model/adddiscountcode");

module.exports.AddDiscountCode = async (req, res) => {
    try {
        const { code, discount } = req.body;
        if (!code || !discount) {
            return res.status(400).json({ result: false, message: "Code and discount are required" });
        }
        const existingCode = await model.CheckDiscountCode(code);
        if (existingCode.length > 0) {
            return res.status(409).json({ result: false, message: "Code already exists" });
        }
        const newCode = await model.AddDiscountCode(code, discount);
        return res.status(201).json({ result: true, message: "Discount code added successfully", code: newCode });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}