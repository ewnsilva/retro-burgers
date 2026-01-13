"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          title: JSON.stringify({
            pt: "X-Burguer",
            en: "X-Burger",
          }),
          description: JSON.stringify({
            pt: "Hamburguer de carne com queijo, presunto e molho de pimenta",
            en: "Beef burger with cheese, ham and pepper sauce",
          }),
          price: JSON.stringify({
            brl: "10.00",
            usd: "2.00",
          }),
          category_id: 2,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: JSON.stringify({
            pt: "Coxinha de Frango",
            en: "Chicken Coxinha",
          }),
          description: JSON.stringify({
            pt: "Salgado frito com recheio cremoso de frango temperado e massa crocante",
            en: "Fried snack with creamy seasoned chicken filling and crispy dough",
          }),
          price: JSON.stringify({
            brl: "6.50",
            usd: "1.30",
          }),
          category_id: 1,
          logo: "../public/images/BurguerExample.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: JSON.stringify({
            pt: "Suco de Laranja Natural",
            en: "Natural Orange Juice",
          }),
          description: JSON.stringify({
            pt: "Suco 100% natural, feito na hora com laranjas frescas selecionadas",
            en: "100% natural juice, made fresh with selected fresh oranges",
          }),
          price: JSON.stringify({
            brl: "5.00",
            usd: "1.00",
          }),
          category_id: 3,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: JSON.stringify({
            pt: "Esfiha de Carne",
            en: "Meat Esfiha",
          }),
          description: JSON.stringify({
            pt: "Deliciosa esfiha aberta recheada com carne moída temperada",
            en: "Delicious open esfiha filled with seasoned ground meat",
          }),
          price: JSON.stringify({
            brl: "7.00",
            usd: "1.40",
          }),
          category_id: 1,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: JSON.stringify({
            pt: "Refrigerante Cola 350ml",
            en: "Cola Soda 350ml",
          }),
          description: JSON.stringify({
            pt: "Refrigerante gelado sabor cola, lata 350ml",
            en: "Cold cola-flavored soda, 350ml can",
          }),
          price: JSON.stringify({
            brl: "4.50",
            usd: "0.90",
          }),
          category_id: 3,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
