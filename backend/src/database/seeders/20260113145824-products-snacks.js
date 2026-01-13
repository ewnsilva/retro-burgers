"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const logo =
      "https://github.com/user-attachments/assets/11f2e797-9c88-4fee-8f8b-e432ad60bbbd";

    const snacks = [
      {
        pt: "Petisco de Carne",
        en: "Meat Skewer",
        descPt: "Espeto com carnes e linguiças temperadas.",
        descEn: "Skewer with seasoned meats and sausages.",
        price: 10.99,
      },
      {
        pt: "Quibe",
        en: "Kibbeh",
        descPt: "Quibe recheado com carne moída temperada e hortelã.",
        descEn: "Kibbeh stuffed with seasoned ground beef and mint.",
        price: 8.99,
      },
      {
        pt: "Pastel de Queijo",
        en: "Cheese Pastry",
        descPt: "Pastel crocante com recheio de queijo derretido.",
        descEn: "Crispy pastry filled with melted cheese.",
        price: 6.49,
      },
      {
        pt: "Bolinha de Queijo",
        en: "Cheese Balls",
        descPt: "Bolinha de queijo cremosa com massa leve.",
        descEn: "Creamy cheese balls with a light dough.",
        price: 5.49,
      },
      {
        pt: "Esfiha de Carne",
        en: "Beef Sfiha",
        descPt: "Esfiha aberta com recheio de carne temperada.",
        descEn: "Open-faced sfiha filled with seasoned beef.",
        price: 7.99,
      },
      {
        pt: "Empada de Frango",
        en: "Chicken Pie",
        descPt: "Empada recheada com frango desfiado e temperado.",
        descEn: "Pie filled with seasoned shredded chicken.",
        price: 6.99,
      },
      {
        pt: "Croissant de Presunto e Queijo",
        en: "Ham and Cheese Croissant",
        descPt: "Croissant folhado com recheio de presunto e queijo.",
        descEn: "Flaky croissant filled with ham and cheese.",
        price: 8.49,
      },
      {
        pt: "Pão de Queijo",
        en: "Cheese Bread",
        descPt: "Clássico pão de queijo brasileiro, macio e delicioso.",
        descEn: "Classic Brazilian cheese bread, soft and delicious.",
        price: 2.5,
      },
    ];

    const now = new Date();

    const dataToInsert = snacks.map((item) => ({
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
      category_id: 1,
      logo,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("products", dataToInsert);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", {
      category_id: 1,
    });
  },
};
