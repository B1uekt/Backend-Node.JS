'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usersss', [{
      email: 'example@example.com',
      firstName: 'John',
      lastName: 'Doe',
      address: 'TPHCM',
      gender: true,
      roleid: 'thuc tap',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
