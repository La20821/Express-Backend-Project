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


module.exports = router;


