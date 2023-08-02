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
        type: DataTypes.ARRAY(
          DataTypes.ENUM(
            'username',
            'firstName',
            'lastName',
            'gender',
            'ethnicity',
            'occupation'
        )),
        validate: {
          isIn: [[
          'username',
          'firstName',
          'lastName',
          'gender',
          'ethnicity',
          'occupation' ]]
        }
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('fields');
  }
}