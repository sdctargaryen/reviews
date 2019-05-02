const Sequelize = require('sequelize');
const db = require('./index.js')

const Model = db.define (
    'reviews',
    {
        property_id: {type: Sequelize.INTEGER, allowedNull: true },
        user: {type: Sequelize.STRING, allowedNull: false },
        date: {type: Sequelize.STRING, allowedNull: false },
        text: {type: Sequelize.STRING, allowedNull: false },
        userImage: {type: Sequelize.STRING, allowedNull: false },
        accuracy: {type: Sequelize.INTEGER, allowedNull: false },
        communication: {type: Sequelize.INTEGER, allowedNull: false },
        cleanliness: {type: Sequelize.INTEGER, allowedNull: false },
        location: {type: Sequelize.INTEGER, allowedNull: false },
        checkIn: {type: Sequelize.INTEGER, allowedNull: false },
        value: {type: Sequelize.INTEGER, allowedNull: false },
    },
    { timestamps: false },
);

db
  .sync()
  .then(() => console.log('Synced with MYSQL Database'))
  .catch(error => console.error(error));

  module.exports = Model;