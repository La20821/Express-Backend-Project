'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Items",
      [
        {
          type: "blouse",
          color: "red",
          size: 6,
          img:"",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "pants",
          color: "black",
          size: 6,
          img:"",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
