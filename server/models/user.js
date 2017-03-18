'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
    profilePhoto: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          User.hasMany(models.Photo, { foreignKey:'userId' });
          User.hasMany(models.Comments, { foreignKey:'userId' });
          }
      }
  });
  return User;
};
