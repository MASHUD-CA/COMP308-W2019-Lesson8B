let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the db schema
let contactModel = require("../models/contact");

/*GET Contact List page - READ Operation */
router.get("/", (req, res, next) => {
  // contactList contain all what we will form db and if there error it goes to err.
  contactModel.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(contactList); // for testing
      // we r trying render something that says contacts index so thie we want render  we want to pass a title, want to pass a contact list array which has packtful infomraiton we got from out database.

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList
      });
    }
  });
});

/* GET Route for the Add page
this will display the Add page */
router.get("/add", (req, res, next) => {
  res.render("contacts/add", {
    title: "Add New Contact"
  });
});

/* POST Route for processing the Add page */
router.post("/add", (req, res, next) => {
  let newContact = contactModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  });

  contactModel.create(newContact, (err, contactModel) => {
    // it is a 500 error,
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
});
module.exports = router;
