// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/reviewsData', { useNewUrlParser: true }, () => {
//   console.log('reviews connected');
// });

// db = mongoose.connection;

// module.exports = db;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('properties', 'fred', 'password', {
    host: '18.191.180.14',
    dialect: 'mysql',
    logging: false
  });

  sequelize
  .authenticate()
  .then(() => console.log('Connected to MySQL Database'))
  .catch(error => console.error(error));

module.exports = sequelize;