let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET about page. */
router.get("/about", indexController.displayAboutPage);

/* GET products page. */
router.get("/products", indexController.displayProductsPage);

/* GET services page. */
router.get("/services", indexController.displayServicesPage);

/* GET contact page. */
router.get("/contact", indexController.displayContactPage); // NO NEED POST FOR LOGOUT.

/* GET - display the Login Page */
router.get("/login", indexController.displayLoginPage);
/* POST - processes the Login Page*/
router.post("/login", indexController.processLoginPage);
/* GET - display the USER Registration page */
router.get("/register", indexController.displayRegisterPage);
/*  POST - process the USER registration page*/
router.post("/register", indexController.processRegisterPage);
/* GET - perform the User logout  */
router.get("/logout", indexController.performLogout);
module.exports = router;
