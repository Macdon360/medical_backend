var model = require("../model/register");

module.exports.Register = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;
        if (!name || !email || !mobile || !password) {
            return res.status(400).json({ result: false, message: "Name, email, mobile and password are required" });
        }

        const existingUser = await model.Login(email);
        if (existingUser.length > 0) {
            return res.status(409).json({ result: false, message: "Email already registered" });
        }

        const newUser = await model.Register(name, email, mobile, password);
        return res.status(201).json({ result: true, message: "User registered successfully", user: newUser });
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}