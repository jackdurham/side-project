const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { db, env } = require('../config/environment');
const Car = require('../models/car');

mongoose.connect(db[env]);

// Car.collection.drop();

Car
.create([{
  make: 'DeLorean',
  model: 'DMC-12',
  image: 'http://momentcar.com/images250_/delorean-11.jpg'
}, {
  make: 'Batmobile',
  model: 'Tumbler',
  image: 'http://www.figures.cz/detail/01/1283.jpg'
}, {
  make: '1959 Cadillac',
  model: 'Ecto-1',
  image: 'https://cdn.fstoppers.com/styles/square_medium/s3/photos/1808/02/27/69381619dc5b4e5f973a346e2689b736.jpg'
}, {
  make: '1969 Dodge Charger',
  model: 'General Lee',
  image: 'https://s3-media4.fl.yelpcdn.com/bphoto/P99yj5C-4UZ8_atc9VlKqA/ls.jpg'
}, {
  make: 'Ford',
  model: 'Falcon XB GT Coupe 1973',
  image: 'https://assets.flatpyramid.com/wp-content/uploads/2017/07/10212728/mad_max_fight_interceptor_dodge_challenger_2015-3d-model-40245-841496-250x250.jpg'
}, {
  make: '1982 Pontic',
  model: 'Firebird',
  image: 'https://www.jekame-novedades-led.com/26-home_default/strip-scanner-48-led-5050-knight-rider-7-colors.jpg'
}])
.then((cars) => {
    console.log(`${cars.length} cars created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
