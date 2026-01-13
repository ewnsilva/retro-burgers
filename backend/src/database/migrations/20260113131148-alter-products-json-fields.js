"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("products", "title", {
      type: Sequelize.JSON,
      allowNull: false,
    });

    await queryInterface.changeColumn("products", "description", {
      type: Sequelize.JSON,
      allowNull: false,
    });

    await queryInterface.changeColumn("products", "price", {
      type: Sequelize.JSON,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("products", "title", {
      type: Sequelize.STRING,
    });

    await queryInterface.changeColumn("products", "description", {
      type: Sequelize.STRING,
    });

    await queryInterface.changeColumn("products", "price", {
      type: Sequelize.STRING,
    });
  },
};
