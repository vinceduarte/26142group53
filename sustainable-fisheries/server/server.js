const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");const users = require("./routes/api/users");
const app = express();
const authRoute = require("./routes/api/auth");
const userRoute = require("./routes/api/users");
const postRoute = require("./routes/api/posts");
const dotenv = require("dotenv");

dotenv.config();

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
  
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/posts", postRoute);
app.use(passport.initialize());// Passport config
require("./config/passport")(passport);// Routes
app.use("/api/users", users);const port = process.env.PORT || 5000;app.listen(port, () => console.log(`Server up and running on port ${port}`));
