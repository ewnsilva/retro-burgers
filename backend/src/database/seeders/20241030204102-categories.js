"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: JSON.stringify({ pt: "Salgados", en: "Snacks" }),
          createdAt: now,
          updatedAt: now,
        },
        {
          title: JSON.stringify({ pt: "Hambúrgueres", en: "Burgers" }),
          createdAt: now,
          updatedAt: now,
        },
        {
          title: JSON.stringify({ pt: "Bebidas", en: "Drinks" }),
          createdAt: now,
          updatedAt: now,
        },
        {
          title: JSON.stringify({ pt: "Doces", en: "Desserts" }),
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
