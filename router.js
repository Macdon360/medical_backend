var router = require("express").Router();


router.post("/login", require("./controller/login").Login);
router.post("/register", require("./controller/register").Register);
router.post("/addproducts", require("./controller/addproducts").AddProducts);
router.get("/listproducts", require("./controller/listproducts").ListProducts);
router.post("/checkdiscount", require("./controller/checkdiscount").CheckDiscount);
router.post("/adddiscount", require("./controller/adddiscountcode").AddDiscountCode);
router.get("/listbrands", require("./controller/listbrands").ListBrands);
router.post("/addbrand", require("./controller/addbrand").AddBrand);
router.post("/addsubscribe", require("./controller/addsubcribe").AddSubcribe);
router.post("/addoffer", require("./controller/addoffers").AddOffers);



module.exports = router;
