'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Jane",
          fashionname: "janista",
          passcode: "1234"
        },
        {
          name: "Jill",
          fashionname: "jillista",
          passcode: "5678"
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
