const express = require('express');
const router = express.Router();

//Add clothing items model
const ItemModel = require('../models').Item;
const UserModel = require("../models").User;
const UserItem = require("../models").UserItem;

// ADD A CLOTHING ITEM
router.post("/newitem", async (req, res) => {
    let item = await ItemModel.create(req.body)
    res.json({ item });
  });

// Add User to Item
router.post("/:id/addusertoitem", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id)
  let item = await ItemModel.findByPk(req.body.id)

  if (user && item) {
    let record = await UserItem.create({
      userId: req.body.id,
      itemId: req.params.id
    }).then((newRecord) => {
      res.json({Message: "Record added successfully"})
    }) 
  } else {
    res.json({Message: "User with that Id cannot be found"})
  }
});

  // UPDATE A CLOTHING ITEM
router.put("/:id", async (req, res) => {
  // let user = await UserModel.findByPk(req.params.id)
  // let item = await ItemModel.findByPk(req.body.id)
  let item = await ItemModel.findByPk(req.params.id);
  let user = await UserModel.findByPk(req.body.id);

  if (user && item) {
    let record = await UserItem.update(req.body, {
      where: {id: req.params.id},
      returning: true,
      // userId: req.params.id,
      // itemId: req.body.id
    }).then((editRecord) => {
      res.json({Message: "Record was updated successfully"})
    })
  } else {
    res.json({Message: "Record could not be updated"})
  }
});




// DELETE A CLOTHING ITEM
router.delete("/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id)
  let item = await ItemModel.findByPk(req.body.id)

  if (user && item) {
    let record=  await UserItem.destroy({
      where: { id: req.params.id},
      // userId: req.body.id,
      // itemId: req.params.id
  }).then((deleteRecord) => {
    res.json({Message: "Record was deleted successfully"})
  })
 } else {
   res.json({Message:"Record could not be deleted"})
 }
}); 





module.exports = router;