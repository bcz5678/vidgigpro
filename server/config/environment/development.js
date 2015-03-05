'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/inscoop-dev'
  },
  sequelize: {
    uri: 'postgres://christopherjsweigard:@localhost:5432/christopherjsweigard',
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
