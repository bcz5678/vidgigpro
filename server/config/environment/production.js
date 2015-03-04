'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // Sql 
  sequelize: {
    uri: 'postgres://ojfmghuyqfnvfe:d10vHLtgdJAE4tIDTZVTN-uqr5@ec2-23-23-80-55.compute-1.amazonaws.com:5432/d32megn1lmgjvr',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};
