const express = require("express");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
// const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
require("./routes/html-routes")(app);

app.listen(3000, function () {
  console.log("App listening on port " + PORT);
});
