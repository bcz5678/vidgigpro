'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/vidgig-test'
  },
  sequelize: {
    uri: 'postgresql://vidgigdev:teamshare1234@localhost/vidgigpro',
    options: {
      logging: true,
      storage: 'test.postgres',
      define: {
        timestamps: false
      }
    }
  }
};
