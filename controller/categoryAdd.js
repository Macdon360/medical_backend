var model = require("../model/categoryAdd");

module.exports.AddCategory = async(req, res) => {
    try {
        var {c_name, c_description} = req.body;
        
    } catch (error) {
        return res.send({
            result: false,
            message: error.message
        })
    }
}