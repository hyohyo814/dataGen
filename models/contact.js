const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

class Contact extends Model{}

Contact.init({
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
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: /^[0-9()+-]+$/,
    },
  },
},{
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'contact'
})

module.exports = Contact;