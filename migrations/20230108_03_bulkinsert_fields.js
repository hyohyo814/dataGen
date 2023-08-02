const { sequelize } = require("../models/contact");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.bulkInsert('fields', [
      { select: sequelize.literal(`ARRAY['username', 'firstName', 'lastName']::"enum_fields_select"[]`) }
    ], {});
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.bulkDelete('fields');
  }
}