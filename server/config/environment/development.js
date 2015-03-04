'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/inscoop-dev'
  },
  sequelize: {
    uri: 'postgres://ojfmghuyqfnvfe:d10vHLtgdJAE4tIDTZVTN-uqr5@ec2-23-23-80-55.compute-1.amazonaws.com:5432/d32megn1lmgjvr',
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
