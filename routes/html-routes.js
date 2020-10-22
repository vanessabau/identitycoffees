// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/about.html"));
  });

  app.get("/midtown", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/midtown.html"));
  });

  app.get("/team", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/team.html"));
  });

  app.get("/coffee", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/coffee.html"));
  });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });
};
