"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
      },
      properties: {
        type: Sequelize.TEXT,
      },
      images: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.STRING,
      },
      label: {
        type: Sequelize.STRING,
      },
      disscount: {
        type: Sequelize.INTEGER,
      },
      information: {
        type: Sequelize.TEXT,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
