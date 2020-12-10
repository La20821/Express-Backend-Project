require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const bodyParser = require('body-parser')

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt; // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser; // ADDS A .user PROP TO REQ FOR TOKEN USER
      console.log(decodedUser);
  
      next();
    });
};

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride("_method"));

// HOMEPAGE
app.get("/", (req, res) => {
    res.json({ message: "express api app is working" });
  });



app.use("/users", require("./controllers/usersController.js"));
app.use('/items', require('./controllers/itemsController.js'));
app.use("/auth", require("./controllers/authController.js"));



app.listen(process.env.PORT, ()=>{
    console.log("My feet are tired from running");
});
 