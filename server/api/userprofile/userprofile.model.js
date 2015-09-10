'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Userprofile', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: "Users:_id",
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    phone_home: DataTypes.STRING,
    phone_mobile: DataTypes.STRING,
    fax: DataTypes.STRING,
  });
};

