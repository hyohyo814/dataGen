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
      height: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          min: 0,
          max: 300
        }
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          min: 0,
          max: 1000
        }
      },
      blood_type: {
        type: DataTypes.ENUM,
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        allowNull: true,
        validate: {
          isIn: [['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']]
        }
      },
      race: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('personnels');
  }
};