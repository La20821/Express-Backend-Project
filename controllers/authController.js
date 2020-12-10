require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require("../models").User;

//POST - CREATE NEW USER FROM SIGNUP
// router.post("/signup", (req, res) => {
//     console.log(`req.body${req.body.username}`);
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) return res.status(500).json(err);
  
//       bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
//         if (err) return res.status(500).json(err);
//         req.body.password = hashedPwd;
  
//         User.create(req.body)
//           .then((newUser) => {
//             const token = jwt.sign(
//               {
//                 username: newUser.username,
//                 id: newUser.id,
//               },
//               process.env.JWT_SECRET,
//               {
//                 expiresIn: "30 days",
//               }
//             );
//             console.log(token);
//              res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
//              res.redirect(`/users/profile/${newUser.id}`);
//             res.json({ token });
//           })
//           .catch((err) => {
//             console.log(err);
//             res.send(`err ${err}`);
//           });
//       });
//     });
//   });


  // POST LOGIN
router.post("/login", (req, res) => {
  console.log(`req.body${req.body.username}`);
    User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      },
    }).then((foundUser) => {
       console.log(foundUser)
      if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
          if (match) {
            const token = jwt.sign(
              {
                username: foundUser.username,
                id: foundUser.id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "30 days",
              }
            );
            console.log(token);
             res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
             res.redirect(`/users/profile/${foundUser.id}`);
            res.json({ token });
          } else {
            return res.sendStatus(400);
          }
         }
        );
      }
    });
  });

module.exports = router;