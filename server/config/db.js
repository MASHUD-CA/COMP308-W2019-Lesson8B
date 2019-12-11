// Module is a container, object container. Each module/file and node by default is 2 surley braces

module.exports = {
  //KEy value pari: URI is property of db.js[db.js is a module coz we put module exports inside the curly braces is one property that means
  // we exposed the URI property to other parts of my code. ]
  // URI: "mongodb://localhost/test"
  URI:
    "mongodb+srv://dbUser01:dbUser01@comp308-01-ymcml.azure.mongodb.net/comp308-w2019-lesson4b?retryWrites=true&w=majority"

  // URI:
  //  "mongodb+srv://dbUser01:dbUser01@comp308-01-ymcml.azure.mongodb.net/test?retryWrites=true&w=majority"
};
