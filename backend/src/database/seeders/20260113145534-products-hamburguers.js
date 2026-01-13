"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const logo =
      "https://github.com/user-attachments/assets/1f3037f3-d875-4a9f-b794-7b83c1b1f159";

    const burgers = [
      {
        pt: "Classic Burger",
        en: "Classic Burger",
        descPt:
          "Um hambúrguer tradicional com carne suculenta, alface, tomate e molho especial.",
        descEn:
          "A traditional burger with juicy beef, lettuce, tomato, and special sauce.",
        price: 19.99,
      },
      {
        pt: "Cheese Lover",
        en: "Cheese Lover",
        descPt:
          "Hambúrguer com dupla camada de queijo cheddar e carne grelhada no ponto certo.",
        descEn:
          "Burger with double layers of cheddar cheese and perfectly grilled beef.",
        price: 22.99,
      },
      {
        pt: "Bacon Deluxe",
        en: "Bacon Deluxe",
        descPt:
          "Carne grelhada com fatias crocantes de bacon, queijo e molho barbecue.",
        descEn:
          "Grilled beef with crispy bacon slices, cheese, and barbecue sauce.",
        price: 24.99,
      },
      {
        pt: "Veggie Delight",
        en: "Veggie Delight",
        descPt:
          "Hambúrguer vegetariano com um mix de grãos, queijo, alface e guacamole.",
        descEn:
          "Vegetarian burger with a mix of grains, cheese, lettuce, and guacamole.",
        price: 18.99,
      },
      {
        pt: "Spicy Jalapeño",
        en: "Spicy Jalapeño",
        descPt:
          "Hambúrguer apimentado com jalapeños, pimenta caiena e molho picante.",
        descEn: "Spicy burger with jalapeños, cayenne pepper, and hot sauce.",
        price: 21.99,
      },
      {
        pt: "Mushroom Swiss",
        en: "Mushroom Swiss",
        descPt:
          "Hambúrguer com cogumelos salteados, queijo suíço e cebolas caramelizadas.",
        descEn:
          "Burger with sautéed mushrooms, Swiss cheese, and caramelized onions.",
        price: 23.49,
      },
      {
        pt: "Chicken Crispy",
        en: "Chicken Crispy",
        descPt:
          "Delicioso hambúrguer de frango empanado, alface, tomate e maionese.",
        descEn:
          "Delicious crispy chicken burger with lettuce, tomato, and mayonnaise.",
        price: 20.99,
      },
      {
        pt: "Double Trouble",
        en: "Double Trouble",
        descPt:
          "Dois hambúrgueres suculentos, queijo duplo, bacon e molho especial.",
        descEn:
          "Two juicy beef patties with double cheese, bacon, and special sauce.",
        price: 26.99,
      },
    ];

    const now = new Date();

    const dataToInsert = burgers.map((burger) => ({
      title: JSON.stringify({
        pt: burger.pt,
        en: burger.en,
      }),
      description: JSON.stringify({
        pt: burger.descPt,
        en: burger.descEn,
      }),
      price: JSON.stringify({
        brl: burger.price.toFixed(2),
        usd: (burger.price / 5).toFixed(2),
      }),
      category_id: 2,
      logo,
      createdAt: now,
      updatedAt: now,
    }));

    await queryInterface.bulkInsert("products", dataToInsert);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", {
      category_id: 2,
    });
  },
};
