const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

class Personnel extends Model {};

Personnel.init({
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
  firstName: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      isAlpha: true
    }
  },
  lastName: {
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
},{
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'personnel'
})

module.exports = Personnel;