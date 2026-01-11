"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const additionals = [
      // Hamburguer
      { title: "Hamburguer", type: "quantity" },
      { title: "Queijo", type: "quantity" },
      { title: "Bacon", type: "quantity" },
      { title: "Peperoni", type: "quantity" },
      { title: "Tomate", type: "boolean" },
      { title: "Cebola", type: "boolean" },
      { title: "Alface", type: "boolean" },
      { title: "Picles", type: "boolean" },
      { title: "Onion Rings", type: "boolean" },
      { title: "Azeitona", type: "boolean" },
      { title: "Doritos", type: "boolean" },
      { title: "Maionese", type: "boolean" },
      { title: "Mostarda", type: "boolean" },
      { title: "Ketchup", type: "boolean" },
      { title: "Molho especial", type: "boolean" },
      { title: "Cheddar cremoso", type: "boolean" },

      // Snacks
      { title: "Pimenta", type: "boolean" },
      { title: "Molho verde", type: "boolean" },
      { title: "Barbecue", type: "boolean" },
      { title: "Catupiry", type: "boolean" },

      // Drinks
      { title: "Canudo", type: "boolean" },
      { title: "Gelo", type: "boolean" },

      // Sweets
      { title: "Granulado", type: "boolean" },
      { title: "Chantilly", type: "boolean" },
      { title: "Calda de chocolate", type: "boolean" },
      { title: "Calda de morango", type: "boolean" },
      { title: "Raspas de coco", type: "boolean" },
    ];

    const now = new Date();
    const dataToInsert = additionals.map((item) => ({
      ...item,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("additionals", dataToInsert);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("additionals", null, {});
  },
};
