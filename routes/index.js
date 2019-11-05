let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Hope Page" });
});

/* GET about page. */
router.get("/about", function(req, res, next) {
  res.render("index", { title: "About Page" });
});

/* GET products page. */
router.get("/products", function(req, res, next) {
  res.render("index", { title: "Products Page" });
});

/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("index", { title: "Services Page" });
});

/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("index", { title: "Contact Page" });
});

module.exports = router;
