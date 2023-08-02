const { sequelize } = require("../models/contact");

module.exports = {
  up: async ({ context: queryInterface }) => {
    const fieldsData = [{
      select: sequelize.literal(`ARRAY['username', 'firstName', 'lastName', 'gender', 'ethnicity', 'occupation']::"enum_fields_select"[]`) 
    }];
    await queryInterface.bulkInsert('fields', fieldsData, {});
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.bulkDelete('fields', null, {});
  }
}