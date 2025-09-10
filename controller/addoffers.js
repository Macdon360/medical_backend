var model = require("../model/addoffers");

module.exports.AddOffers = async (req, res) => {
    try {
        const { offer_name, offer_discount, offer_category, offer_from, offer_to } = req.body;
        const offer = await model.AddOffers(offer_name, offer_discount, offer_category, offer_from, offer_to);
        if (offer.affectedRows === 0) {
            return res.status(500).json({ result: false, message: "Failed to add offer" });
        }
        return res.json({ result: true, offer: offer });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}