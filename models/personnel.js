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
  bloodType: {
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
},{
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'personnel'
})

module.exports = Personnel;