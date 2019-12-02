let mongoose = require("mongoose");

// create a model class
let contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number
  },
  {
    collection: "first"
    // collection/table name: First01 / first [ in mongodb we need this name]
  }
);

module.exports = mongoose.model("contact", contactSchema);
// database name = "comp308-w2019-lesson4b" or "test" [In mongodb we need this name]
