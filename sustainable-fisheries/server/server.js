const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
const passport = require("passport");
const users = require("./routes/api/users");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);