const router = require('express').Router();
const cars  = require('../controllers/cars');

router.route('/cars')
  .get(cars.index);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
