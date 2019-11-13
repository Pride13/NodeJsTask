'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const userModelAttributes = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    };

    await queryInterface.createTable('user', userModelAttributes);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('user');
  }
};
