'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/vidgigpro-dev'
  },
  sequelize: {
    uri: 'postgres://vidgigdev:teamshare1234@localhost:5432/vidgigpro',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  seedDB: true
};
