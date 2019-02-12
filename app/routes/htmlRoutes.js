var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/young", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/young.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/shop", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shop.html"));
  });
  
};