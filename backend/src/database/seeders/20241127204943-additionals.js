"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const additionals = [
      // Hamburguer
      {
        title: JSON.stringify({ pt: "Hamburguer", en: "Burger" }),
        type: "quantity",
      },
      {
        title: JSON.stringify({ pt: "Queijo", en: "Cheese" }),
        type: "quantity",
      },
      {
        title: JSON.stringify({ pt: "Bacon", en: "Bacon" }),
        type: "quantity",
      },
      {
        title: JSON.stringify({ pt: "Peperoni", en: "Pepperoni" }),
        type: "quantity",
      },
      {
        title: JSON.stringify({ pt: "Tomate", en: "Tomato" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Cebola", en: "Onion" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Alface", en: "Lettuce" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Picles", en: "Pickles" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Onion Rings", en: "Onion Rings" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Azeitona", en: "Olive" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Doritos", en: "Doritos" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Maionese", en: "Mayonnaise" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Mostarda", en: "Mustard" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Ketchup", en: "Ketchup" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({
          pt: "Molho especial",
          en: "Special sauce",
        }),
        type: "boolean",
      },
      {
        title: JSON.stringify({
          pt: "Cheddar cremoso",
          en: "Creamy cheddar",
        }),
        type: "boolean",
      },

      // Snacks
      {
        title: JSON.stringify({ pt: "Pimenta", en: "Pepper" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({
          pt: "Molho verde",
          en: "Green sauce",
        }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Barbecue", en: "Barbecue" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Catupiry", en: "Catupiry" }),
        type: "boolean",
      },

      // Drinks
      {
        title: JSON.stringify({ pt: "Canudo", en: "Straw" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Gelo", en: "Ice" }),
        type: "boolean",
      },

      // Sweets
      {
        title: JSON.stringify({
          pt: "Granulado",
          en: "Sprinkles",
        }),
        type: "boolean",
      },
      {
        title: JSON.stringify({ pt: "Chantilly", en: "Whipped cream" }),
        type: "boolean",
      },
      {
        title: JSON.stringify({
          pt: "Calda de chocolate",
          en: "Chocolate syrup",
        }),
        type: "boolean",
      },
      {
        title: JSON.stringify({
          pt: "Calda de morango",
          en: "Strawberry syrup",
        }),
        type: "boolean",
      },
      {
        title: JSON.stringify({
          pt: "Raspas de coco",
          en: "Coconut flakes",
        }),
        type: "boolean",
      },
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
