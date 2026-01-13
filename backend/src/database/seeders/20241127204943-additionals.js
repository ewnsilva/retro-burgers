"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const additionals = [
      // Hamburguer
      {
        title: JSON.stringify({ pt: "Hamburguer", en: "Burger" }),
        type: "quantity",
        price: JSON.stringify({ brl: "5.00", usd: "1.00" }),
      },
      {
        title: JSON.stringify({ pt: "Queijo", en: "Cheese" }),
        type: "quantity",
        price: JSON.stringify({ brl: "2.50", usd: "0.50" }),
      },
      {
        title: JSON.stringify({ pt: "Bacon", en: "Bacon" }),
        type: "quantity",
        price: JSON.stringify({ brl: "3.50", usd: "0.70" }),
      },
      {
        title: JSON.stringify({ pt: "Peperoni", en: "Pepperoni" }),
        type: "quantity",
        price: JSON.stringify({ brl: "3.00", usd: "0.60" }),
      },
      {
        title: JSON.stringify({ pt: "Tomate", en: "Tomato" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({ pt: "Cebola", en: "Onion" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Alface", en: "Lettuce" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Picles", en: "Pickles" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Onion Rings", en: "Onion Rings" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Azeitona", en: "Olive" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Doritos", en: "Doritos" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Maionese", en: "Mayonnaise" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Mostarda", en: "Mustard" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({ pt: "Ketchup", en: "Ketchup" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.00", usd: "0.20" }),
      },
      {
        title: JSON.stringify({
          pt: "Molho especial",
          en: "Special sauce",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({
          pt: "Cheddar cremoso",
          en: "Creamy cheddar",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },

      // Snacks
      {
        title: JSON.stringify({ pt: "Pimenta", en: "Pepper" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({
          pt: "Molho verde",
          en: "Green sauce",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({ pt: "Barbecue", en: "Barbecue" }),
        type: "boolean",
        price: JSON.stringify({ brl: "0.50", usd: "0.10" }),
      },
      {
        title: JSON.stringify({ pt: "Catupiry", en: "Catupiry" }),
        type: "boolean",
        price: JSON.stringify({ brl: "0.50", usd: "0.10" }),
      },

      // Drinks
      {
        title: JSON.stringify({ pt: "Canudo", en: "Straw" }),
        type: "boolean",
        price: JSON.stringify({ brl: "0.50", usd: "0.10" }),
      },
      {
        title: JSON.stringify({ pt: "Gelo", en: "Ice" }),
        type: "boolean",
        price: JSON.stringify({ brl: "0.50", usd: "0.10" }),
      },
      // Sweets
      {
        title: JSON.stringify({
          pt: "Granulado",
          en: "Sprinkles",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({ pt: "Chantilly", en: "Whipped cream" }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({
          pt: "Calda de chocolate",
          en: "Chocolate syrup",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({
          pt: "Calda de morango",
          en: "Strawberry syrup",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
      },
      {
        title: JSON.stringify({
          pt: "Raspas de coco",
          en: "Coconut flakes",
        }),
        type: "boolean",
        price: JSON.stringify({ brl: "1.50", usd: "0.30" }),
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
