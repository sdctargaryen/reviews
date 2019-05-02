const model = require('../database/models.js');

const controller = {
  getReview: (req, res) => {
    const { property_id } = req.params

      model.findAll({ where: { property_id } })
      .then((data) => { 
        res.status(200).send(data);
      })
      .catch(err => {
        console.error(err)
      })
  },
  addReview: (req, res) => {
      const { property_id, user, date, text, userImage, accuracy, communication, cleanliness, location, checkIn, value } = req.body;
      
      model.create({ property_id, user, date, text, userImage, accuracy, communication, cleanliness, location, checkIn, value })
      .then(((data) => {
        res.status(201).send(data);
      }))
      .catch(error => console.error(error));
  },
  update: (req, res) => {
      const { text, accuracy, communication, cleanliness, location, checkIn, value } = req.body;
      const { id } = req.params;

      model.update({ text, accuracy, communication, cleanliness, location, checkIn, value }, { where: { id } })
      .then((data) => {
        res.status(202).send(data);
      })
      .catch(error => console.error(error));
  },
  delete: (req, res) => {
      const { id } = req.params;
      
      model.destroy({ where: { id } })
      .then((data) => {
        res.status(200).send('Deleted Boi');
      })
  }
}

module.exports = controller;