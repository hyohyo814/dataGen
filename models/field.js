const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

class Field extends Model { };

Field.init({
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
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'field'
})

module.exports = Field;