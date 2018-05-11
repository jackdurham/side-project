// const port  = process.env.PORT || 4000;
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/foodie';
//
// module.exports = { port, dbURI };
module.exports = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || 'development' || 'test',
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/wdi-group-project-development',
    test: 'mongodb://localhost/wdi-group-project-test'
  },
  secret: process.env.SECRET || 'shh'
};
