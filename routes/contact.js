let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the db schema
let contact = require("../models/contact");

/*GET Contact List page - READ Operation */
router.get("/", (req, res, next) => {
  // contactList contain all what we will form db and if there error it goes to err.
  contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(contactList);
      // we r trying render something that says contacts index so thie we want render
      // we want to pass a title, want to pass a contact list array which has packtful
      // infomraiton we got from out database.

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList
      });
    }
  });
});

module.exports = router;
