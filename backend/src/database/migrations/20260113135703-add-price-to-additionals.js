"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("additionals", "price", {
      type: Sequelize.JSON,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("additionals", "price");
  },
};
