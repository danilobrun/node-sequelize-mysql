"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cars",
      [
        {
          name: "Opala",
          brand: "Chevrolet",
          model: "Comodoro",
          year: 1990,
          transmission: "Manual",
          engine: "4.0",
          color: "Preto",
          door: "4 Portas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Up",
          brand: "VW",
          model: "Tsi",
          year: 2017,
          transmission: "Manual",
          engine: "1.0",
          color: "Branco",
          door: "4",
          license_plate: "PCX-8204",
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
