const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");const users = require("./routes/api/users");
const app = express();
app.use(cors());
// Bodyparser middleware
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));// Passport middleware
app.use(passport.initialize());// Passport config
require("./config/passport")(passport);// Routes
app.use("/api/users", users);const port = process.env.PORT || 5000;app.listen(port, () => console.log(`Server up and running on port ${port}`));