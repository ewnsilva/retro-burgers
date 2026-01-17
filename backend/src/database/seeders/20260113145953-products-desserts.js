"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const logo =
      "https://i.ibb.co/0RHpC2cy/Dessert-Example.jpg";

    const desserts = [
      {
        pt: "Brigadeiro",
        en: "Brigadeiro",
        descPt: "Doce brasileiro de chocolate coberto com granulado.",
        descEn:
          "Traditional Brazilian chocolate truffle covered with chocolate sprinkles.",
        price: 5.49,
      },
      {
        pt: "Beijinho",
        en: "Beijinho",
        descPt: "Doce de coco coberto com açúcar e um cravo no topo.",
        descEn: "Brazilian coconut candy topped with sugar and a clove.",
        price: 5.49,
      },
      {
        pt: "Torta de Limão",
        en: "Lemon Pie",
        descPt: "Torta com creme de limão e merengue por cima.",
        descEn: "Pie filled with lemon cream and topped with meringue.",
        price: 7.99,
      },
      {
        pt: "Bolo de Cenoura",
        en: "Carrot Cake",
        descPt: "Bolo de cenoura com cobertura de chocolate.",
        descEn: "Carrot cake topped with chocolate frosting.",
        price: 6.99,
      },
      {
        pt: "Churros",
        en: "Churros",
        descPt: "Churros recheados com doce de leite.",
        descEn: "Churros filled with dulce de leche.",
        price: 5.49,
      },
      {
        pt: "Pudim",
        en: "Flan",
        descPt: "Pudim de leite condensado com calda de caramelo.",
        descEn: "Condensed milk flan topped with caramel sauce.",
        price: 8.99,
      },
      {
        pt: "Tiramisu",
        en: "Tiramisu",
        descPt: "Clássica sobremesa italiana com café e mascarpone.",
        descEn: "Classic Italian dessert made with coffee and mascarpone.",
        price: 12.49,
      },
      {
        pt: "Brownie",
        en: "Brownie",
        descPt: "Brownie de chocolate com pedaços de nozes.",
        descEn: "Chocolate brownie with walnut pieces.",
        price: 6.49,
      },
    ];

    const now = new Date();

    const dataToInsert = desserts.map((item) => ({
      title: JSON.stringify({
        pt: item.pt,
        en: item.en,
      }),
      description: JSON.stringify({
        pt: item.descPt,
        en: item.descEn,
      }),
      price: JSON.stringify({
        brl: item.price.toFixed(2),
        usd: (item.price / 5).toFixed(2),
      }),
      category_id: 4,
      logo,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("products", dataToInsert);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", {
      category_id: 4,
    });
  },
};
