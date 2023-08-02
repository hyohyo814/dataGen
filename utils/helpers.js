const { faker } = require('@faker-js/faker');

const generateSel = (selections) => {
  const resData = {};
  const specification = selections;
  if (specification.indexOf('gender') !== -1) {
    const index = specification.indexOf('gender');
    resData.gender = faker.person.sex();
    specification.splice(index, 1);
  }

  if (specification.indexOf('firstName') !== -1) {
    const index = specification.indexOf('firstName');
    resData.firstName = faker.person.firstName(resData.gender);
    specification.splice(index, 1);
  }

  if (specification.indexOf('lastName') !== -1) {
    const index = specification.indexOf('lastName');
    resData.lastName = faker.person.lastName();
    specification.splice(index, 1);
  }

  specification.forEach((value) => {
    switch (value) {
      case 'username':
        resData.username = faker.internet.userName({ firstName: resData.firstName, lastName: resData.lastName });
        break;
      case 'ethnicity':
        resData.ethnicity = faker.location.country();
        break;
      case 'occupation':
        resData.occupation = faker.person.jobTitle();
        break;
      default:
        break;
    }
  })
  

  return resData;
}

module.exports = { generateSel}