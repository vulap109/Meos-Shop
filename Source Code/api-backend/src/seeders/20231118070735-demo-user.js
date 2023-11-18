'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
    await queryInterface.bulkInsert('Users', [{
      fullName: 'John Doe',
      email: "admin@meoshop.com",
      phone: "01233443210",
      userName: "administrator",
      password: "$2a$10$Z4o6AE7mZEGRXuVEtojfB.LFR52A5xsIofrtgn5qvLzdBRLxheQUq",
      groupId: 2
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
