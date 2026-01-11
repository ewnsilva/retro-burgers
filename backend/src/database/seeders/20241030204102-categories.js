"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "categories",
      [
        { title: "Salgados", createdAt: new Date(), updatedAt: new Date() },
        { title: "Hambúrgueres", createdAt: new Date(), updatedAt: new Date() },
        { title: "Bebidas", createdAt: new Date(), updatedAt: new Date() },
        { title: "Doces", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
