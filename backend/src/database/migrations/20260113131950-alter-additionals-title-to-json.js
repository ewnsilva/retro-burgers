"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      UPDATE additionals
      SET title = CAST(title AS JSON)
    `);

    await queryInterface.changeColumn("additionals", "title", {
      type: Sequelize.JSON,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("additionals", "title", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
