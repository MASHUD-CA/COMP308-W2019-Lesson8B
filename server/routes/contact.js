let express = require("express");
let router = express.Router();

let passport = require("passport");

let contactController = require("../controllers/contact");

function requireAuth(req, res, next) {
  // Check if the user logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  next();
}

/*GET Contact List page - READ Operation */
router.get("/", requireAuth, contactController.displayContactList);

/* GET Route for the Add page this will display the Add page */
router.get("/add", requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post("/add", requireAuth, contactController.processAddPage);

/* GET request - display the Edit page */
router.get("/edit/:id", requireAuth, contactController.displayEditPage);
/* POST request - update the databse with data from the Edit page*/
router.post("/edit/:id", requireAuth, contactController.processEditPage);

/* GET request to perform the delete*/
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;
