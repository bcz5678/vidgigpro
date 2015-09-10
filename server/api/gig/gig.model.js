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
    created_by_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    feeling_tag_array: DataTypes.TEXT,
    preferred_talent_array: DataTypes.TEXT,
    accepted_talent_array: DataTypes.TEXT,
    status: DataTypes.STRING,
    resource_array: DataTypes.STRING
  });

};
