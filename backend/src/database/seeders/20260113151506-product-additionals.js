"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const additionals = await queryInterface.sequelize.query(
      `SELECT id, title FROM additionals`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const productAdditionals = [];
    const now = new Date();

    const getAddIdsByPt = (names) =>
      additionals
        .filter((a) => {
          const title =
            typeof a.title === "string" ? JSON.parse(a.title) : a.title;
          return title && names.includes(title.pt);
        })
        .map((a) => a.id);

    const mapAddsToProducts = (productIds, addNames) => {
      const addIds = getAddIdsByPt(addNames);

      productIds.forEach((productId) => {
        addIds.forEach((addId) => {
          productAdditionals.push({
            product_id: productId,
            additional_id: addId,
            createdAt: now,
            updatedAt: now,
          });
        });
      });
    };

    // ======================================================
    // HAMBURGUERS (1 → 8)
    // ======================================================
    const burgerAdds = [
      "Hamburger extra",
      "Queijo extra",
      "Bacon",
      "Pepperoni",
      "Tomate",
      "Cebola",
      "Alface",
      "Picles",
      "Onion Rings",
      "Azeitona",
      "Doritos",
      "Maionese",
      "Mostarda",
      "Ketchup",
      "Molho especial",
      "Cheddar cremoso",
      "Pimenta",
      "Molho verde",
      "Barbecue",
      "Catupiry",
    ];

    mapAddsToProducts([1, 2, 3, 4, 5, 6, 7, 8], burgerAdds);

    // ======================================================
    // SNACKS (9 → 16)
    // ======================================================
    const snackAdds = [
      "Molho verde",
      "Barbecue",
      "Pimenta",
      "Mostarda",
      "Molho especial",
      "Cheddar cremoso",
      "Catupiry",
    ];

    mapAddsToProducts([9, 10, 11, 12, 13, 14, 15, 16], snackAdds);

    // ======================================================
    // DESSERTS (17 → 24)
    // ======================================================
    const dessertAdds = ["Granulado", "Chantilly", "Calda de chocolate"];

    mapAddsToProducts([17, 18, 19, 20, 21, 22, 23, 24], dessertAdds);

    // ======================================================
    // DRINKS (25 → 32)
    // ======================================================
    const drinkAdds = ["Gelo", "Canudo"];

    mapAddsToProducts([25, 26, 27, 28, 29, 30, 31, 32], drinkAdds);

    await queryInterface.bulkInsert("product_additionals", productAdditionals);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("product_additionals", null, {});
  },
};
