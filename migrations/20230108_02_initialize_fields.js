const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('fields', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      select: {
        type: DataTypes.ARRAY(DataTypes.ENUM({
          values: [
            'username', 'firstName', 'lastName', 'gender', 'height', 'weight', 'bloodType', 'race'
          ]
        }))
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('fields');
  }
}