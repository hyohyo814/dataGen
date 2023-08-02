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
    type: DataTypes.ARRAY(DataTypes.ENUM({
      values: [
        'username', 'firstName', 'lastName', 'gender', 'height', 'weight', 'bloodType', 'race'
      ]
    }))
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'field'
})

module.exports = Field;