const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

class Field extends Model {};

Field.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  username: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  firstName: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  lastName: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  height: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  weight: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  bloodType: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  race: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
},{
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'field'
})

module.exports = Field;