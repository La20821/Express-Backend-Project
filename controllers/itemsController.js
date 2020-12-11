const express = require('express');
const router = express.Router();

//Add clothing items model
const Item = require('../models').Item;
const User = require("../models").User;

// ADD A CLOTHING ITEM
router.post("/:id/newitem", async (req, res) => {
    let item = await Item.findByPk(req.params.id);
    res.json({ item });
  });

  // UPDATE A CLOTHING ITEM
router.put("/:id", async (req, res) => {
    let updatedItem = await Item.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    let item = await Item.findByPk(req.params.id, {
    });
    res.json({ item });
  });

// DELETE A CLOTHING ITEM
router.delete("/:id", async (req, res) => {
    await Item.destroy({
        where: { id: req.params.id },
    });
    res.json({
        message: `Item with id ${req.params.id} was deleted`,
    });
});


module.exports = router;