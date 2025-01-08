'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.addColumn('Transactions', 'VehicleType', {
      type: Sequelize.STRING, // Or Sequelize.ENUM if you want predefined values
      allowNull: true,       // Set `true` if this column should allow null values
   // Optional default value for existing rows
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Transactions', 'VehicleType');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
