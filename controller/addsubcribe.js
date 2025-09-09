var model = require("../model/addsubcribe");

module.exports.AddSubcribe = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ result: false, message: "Email is required" });
        }
        const existingSubcribe = await model.CheckSubcribe(email);
        if (existingSubcribe.length > 0) {
            return res.status(409).json({ result: false, message: "Email already subscribed" });
        }
        const newSubcribe = await model.AddSubcribe(email);
        return res.status(201).json({ result: true, message: "Subscribed successfully", subcribe: newSubcribe });
    }
    catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}