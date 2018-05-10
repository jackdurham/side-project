const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  image: { type: String, required: true }
});

carSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('car', carSchema);
