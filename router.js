var router = require("express").Router();


router.post("/login", require("./controller/login").Login);
router.post("/register", require("./controller/register").Register);
router.post("/addproducts", require("./controller/addproducts").AddProducts);
router.get("/listproducts", require("./controller/listproducts").ListProducts);

module.exports = router;
