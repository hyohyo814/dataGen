const { faker } = require('@faker-js/faker');
const res = require('express/lib/response');

const generateSel = (selections) => {
  const resData = {};
  const criteria = selections;

  criteria.forEach((value) => {
    switch (value) {
      case 'username':
        if (criteria.indexOf('firstName') !== -1) {
          resData.firstName = faker.firstName();
          resData.username = faker.internet.userName({ firstName })
        }
      default: return
    }
  })

  return resData;
}

module.exports = { generateSel}