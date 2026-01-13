"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const additionals = await queryInterface.sequelize.query(
      `SELECT id, title FROM additionals`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const productAdditionals = [];

    const addByPt = (names) =>
      additionals
        .filter((a) => {
          const title =
            typeof a.title === "string" ? JSON.parse(a.title) : a.title;

          return title && names.includes(title.pt);
        })
        .map((a) => a.id);

    const mapAdd = (productId, names) => {
      addByPt(names).forEach((addId) => {
        productAdditionals.push({
          product_id: productId,
          additional_id: addId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    };

    mapAdd(1, ["Queijo", "Bacon", "Molho especial"]);
    mapAdd(2, ["Molho especial", "Mostarda", "Ketchup"]);
    mapAdd(3, ["Canudo", "Gelo"]);
    mapAdd(4, ["Mostarda", "Pimenta"]);
    mapAdd(5, ["Canudo", "Gelo"]);

    await queryInterface.bulkInsert("product_additionals", productAdditionals);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("product_additionals", null, {});
  },
};
