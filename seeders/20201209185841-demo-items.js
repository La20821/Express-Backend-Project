'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Items = await queryInterface.bulkInsert(
      "Items",
      [
        {
          type: "blouse",
          color: "red",
          size: 6,
          img:"",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "pants",
          color: "black",
          size: 6,
          img:"",
          userId: 2,
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
