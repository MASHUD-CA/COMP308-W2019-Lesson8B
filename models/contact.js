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
    // collection name: First01 / first [ in mongodb we need this name]
  }
);

module.exports = mongoose.model("test", contactSchema);
// database name = "comp308-w2019-lesson4b" or "test" [In mongodb we need this name]
