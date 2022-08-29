var faker = require('faker');

module.exports = {
    Random: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        number: faker.random.number(1000000),
    }
};
