const express = require('express');
const router = express.Router();

const User = require('../models').User;
const Item = require('../models').Item;

// GET USER PROFILE
router.get("/profile/:id", async (req, res) => {
    let user = await User.findByPk(req.params.id, {
        include: Item,
    })
    res.json({ user })
})

// UPDATE A USER
router.put("/:id", async (req, res) => {
    let user = await User.update(
        req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        }
    );
    res.json({
        user
    });
  })

//DELETE A USER
router.delete("/:id", async(req, res) => {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      message: `User with id ${req.params.id} was deleted.`
    })
  });  

module.exports = router;


