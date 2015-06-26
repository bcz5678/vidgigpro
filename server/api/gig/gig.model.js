'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gig', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    status: DataTypes.STRING
  });
};
