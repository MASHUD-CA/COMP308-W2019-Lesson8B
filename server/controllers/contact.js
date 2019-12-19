let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");

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
      res.json({
        success: true,
        msg: "Contact List Displayed Successfully  !",
        contactList: contactList,
        user: req.user
      });
    }
  });
};

//Copied from contact.js under routes folder: display add page
module.exports.displayAddPage = (req, res, next) => {
  res.json({
    success: true,
    msg: "Successfully Displayed Add page !"
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
      res.json({
        success: true,
        msg: "Successfully Added New Contact !"
      });
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
      res.json({
        success: true,
        msg: "Successfully Displayed Contact to Edit !",
        contact: contactObject
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
      res.json({
        success: true,
        msg: "Successfully Edited Contact !",
        contact: updatedContact
      });
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
      res.json({
        success: true,
        msg: "Successfully Deleted Contact !"
      });
    }
  });
};
