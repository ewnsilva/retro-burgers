"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          title: "X-Burguer",
          description:
            "Hamburguer de carne com queijo, presunto e molho de pimenta",
          price: "10.00",
          category_id: 2,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Coxinha de Frango",
          description:
            "Salgado frito com recheio cremoso de frango temperado e massa crocante",
          price: "6.50",
          category_id: 1,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Suco de Laranja Natural",
          description:
            "Suco 100% natural, feito na hora com laranjas frescas selecionadas",
          price: "5.00",
          category_id: 3,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Esfiha de Carne",
          description:
            "Deliciosa esfiha aberta recheada com carne moída temperada",
          price: "7.00",
          category_id: 1,
          logo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Refrigerante Cola 350ml",
          description: "Refrigerante gelado sabor cola, lata 350ml",
          price: "4.50",
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
