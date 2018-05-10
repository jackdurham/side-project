const Car = require('../models/car');

function carsIndex(req, res, next) {
  Car
    .find()
    .exec()
    .then(cars => res.json(cars))
    .catch(next);
}

module.exports = {
  index: carsIndex
};
