'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Items = await queryInterface.bulkInsert(
      "Items",
      [
        {
          userId: 1,
          type: "blouse",
          color: "red",
          size: 6,
          img:"",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
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
