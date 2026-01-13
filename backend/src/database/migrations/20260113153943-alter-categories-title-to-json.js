"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("categories", "title", {
      type: Sequelize.JSON,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("categories", "title", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
