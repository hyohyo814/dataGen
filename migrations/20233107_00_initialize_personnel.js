const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('personnels', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      first_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          isAlpha: true
        }
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          isAlpha: true
        }
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female', 'other'],
        allowNull: true,
        validate: {
          isIn: [['male', 'female', 'other']]
        }
      },
      ethnicity: {
        type: DataTypes.STRING,
        allowNull: true
      },
      occupation: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('personnels');
  }
};