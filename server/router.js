const router = require('express').Router();
const controller = require('./controller.js');

router.route('/reviews/:property_id')
  .get(controller.getReview)
  .post(controller.addReview)
  .put(controller.update)
  .delete(controller.delete)

module.exports = router;