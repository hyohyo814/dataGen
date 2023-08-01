const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('contacts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9()+-]+$/,
        },
      },
    })
  }
}