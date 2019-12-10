let express = require("express");
let router = express.Router();

// create a reference to the db schema
let contactModel = require("../models/contact");

//Copied from contact.js under routes folder: Contact-list page
module.exports.displayContactList = (req, res, next) => {
  // contactList contain all what we will form db and if there error it goes to err.
  contactModel.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(contactList); // for testing
      // we r trying render something that says contacts index so thie we want render  we want to pass a title, want to pass a contact list array which has packtful infomraiton we got from out database.

      res.render("contacts/index", {
        title: "Contact List",
        contactList: contactList,
        displayName: req.user ? req.user.displayName : ""
      });
    }
  });
};

//Copied from contact.js under routes folder: display add page
module.exports.displayAddPage = (req, res, next) => {
  res.render("contacts/add", {
    title: "Add New Contact",
    displayName: req.user ? req.user.displayName : ""
  });
};

//Copied from contact.js under routes folder: process add page
module.exports.processAddPage = (req, res, next) => {
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
};
//Copied from contact.js under routes folder: display edit page
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  contactModel.findById(id, (err, contactObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the EDIT view
      res.render("contacts/edit", {
        title: "Edit Contact",
        contact: contactObject,
        displayName: req.user ? req.user.displayName : ""
      });
    }
  });
};

//Copied from contact.js under routes folder: display edit page
module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedContact = contactModel({
    _id: id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  });

  contactModel.update({ _id: id }, updatedContact, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // Refresh the contact list
      res.redirect("/contact-list");
    }
  });
};
//Copied from contact.js under routes folder: delete page
module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  contactModel.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/contact-list");
    }
  });
};
