'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsToMany(models.User, { 
        through: "UserItem",
        foreignKey: "itemId", 
        otherKey: 'userId'
      });
    }
  };
  Item.init({
    // itemId: DataTypes.INTEGER,
    // userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.INTEGER,
    img: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};