const express = require('express');
const app = express();
// const jwt = require("jsonwebtoken");
// const methodOverride = require("method-override");

// app.use(methodOverride("_method"));

// HOMEPAGE
app.get("/", (req, res) => {
    res.json({ message: "express api app is working" });
  });


app.use("/users", require("./controllers/usersController.js"));


app.listen(3000, ()=>{
    console.log("My feet are tired from running");
});
 