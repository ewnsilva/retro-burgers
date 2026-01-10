"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const products = await queryInterface.sequelize.query(
      `SELECT id, title FROM products`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const additionals = await queryInterface.sequelize.query(
      `SELECT id, title FROM additionals`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const productAdditionals = [];

    const xBurgerAddIds = additionals
      .filter((a) => ["Queijo", "Bacon", "Molho especial"].includes(a.title))
      .map((a) => a.id);

    xBurgerAddIds.forEach((addId) => {
      productAdditionals.push({
        product_id: 1,
        additional_id: addId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const coxinhaAddIds = additionals
      .filter((a) =>
        ["Molho especial", "Mostarda", "Ketchup"].includes(a.title)
      )
      .map((a) => a.id);

    coxinhaAddIds.forEach((addId) => {
      productAdditionals.push({
        product_id: 2,
        additional_id: addId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const sucoAddIds = additionals
      .filter((a) => ["Canudo", "Gelo"].includes(a.title))
      .map((a) => a.id);

    sucoAddIds.forEach((addId) => {
      productAdditionals.push({
        product_id: 3,
        additional_id: addId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const esfihaAddIds = additionals
      .filter((a) => ["Mostarda", "Pimenta"].includes(a.title))
      .map((a) => a.id);

    esfihaAddIds.forEach((addId) => {
      productAdditionals.push({
        product_id: 4,
        additional_id: addId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const refriAddIds = additionals
      .filter((a) => ["Canudo", "Gelo"].includes(a.title))
      .map((a) => a.id);

    refriAddIds.forEach((addId) => {
      productAdditionals.push({
        product_id: 5,
        additional_id: addId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    await queryInterface.bulkInsert("product_additionals", productAdditionals);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("product_additionals", null, {});
  },
};
