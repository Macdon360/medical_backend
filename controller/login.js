var model = require("../model/login");


module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ result: false, message: "Email and password are required" });
        }
        const user = await model.Login(email);

        if (user.length === 0) {
            return res.status(401).json({ result: false, message: "Invalid email" });
        } else {
            if (user[0].u_password !== password) {
                return res.status(401).json({ result: false, message: "wrong password" });
            } else {
                let userArray = {
                    id: user[0].u_id,
                    name: user[0].u_name,
                    email: user[0].u_mail,
                };
                return res.json({ result: true, message: "Login successful", user: userArray });
            }
        }
    } catch (err) {
        return res.status(500).json({ result: false, message: err.message });
    }
}