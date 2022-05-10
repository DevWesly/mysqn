'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [
      {
        id: 1,
        nome: 'Lucas',
        email: 'lucas@text.com',
        senha: bcrypt.hashSync('12346',10),
        createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19)
      },
    {
      id: 2,
      nome: 'Juliana',
      email: 'ju@text.com',
      senha: bcrypt.hashSync('12346',10),
      createdAt: new Date().toISOString().substring(0,19),
      updatedAt: new Date().toISOString().substring(0,19)
    },
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
