const Sequelize = require('sequelize');

const sequelize = new Sequelize('properties', 'fred', 'password', {
    host: '18.219.139.144',
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  sequelize
  .authenticate()
  .then(() => console.log('Connected to MySQL Database'))
  .catch(error => console.error(error));

module.exports = sequelize;