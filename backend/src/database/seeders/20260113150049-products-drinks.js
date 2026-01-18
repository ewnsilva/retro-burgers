"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const logo = "https://i.ibb.co/1GFh6shX/Drink-Example.jpg";

    const drinks = [
      { pt: "Coca-Cola", en: "Coca-Cola", price: 7.99 },
      { pt: "Pepsi", en: "Pepsi", price: 6.99 },
      { pt: "Guaraná", en: "Guarana", price: 6.49 },
      { pt: "Água com Gás", en: "Sparkling Water", price: 5.9 },
      { pt: "Água Mineral", en: "Mineral Water", price: 5.0 },
      { pt: "Suco de Laranja", en: "Orange Juice", price: 10.99 },
      { pt: "Suco de Uva", en: "Grape Juice", price: 10.99 },
      { pt: "Chá Gelado", en: "Iced Tea", price: 7.99 },
    ];

    const now = new Date();

    const dataToInsert = drinks.map((item) => ({
      title: JSON.stringify({
        pt: item.pt,
        en: item.en,
      }),
      description: JSON.stringify({
        pt: "",
        en: "",
      }),
      price: JSON.stringify({
        brl: item.price.toFixed(2),
        usd: (item.price / 5).toFixed(2),
      }),
      category_id: 3,
      logo,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("products", dataToInsert);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", {
      category_id: 3,
    });
  },
};
