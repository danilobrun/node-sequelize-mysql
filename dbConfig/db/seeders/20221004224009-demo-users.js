"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Danilo Brun",
          email: "danilo@com.br",
          password: "123456 ",
          role: "admin",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Daniel Brun",
          email: "daniel@com.br",
          password: "123456 ",
          role: "admin",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
