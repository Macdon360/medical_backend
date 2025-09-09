var router = require("express").Router();


router.use("/login", require("./controller/login").Login);
router.use("/register", require("./controller/register").Register);

module.exports = router;
