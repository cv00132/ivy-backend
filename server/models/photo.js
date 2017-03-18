'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    title: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Photo.belongsToMany(models.Tags, {
            through: {
                model: 'PhotoTags',
                foreignKey: 'photoId'
            }
        });
      }
    }
  });
  return Photo;
};
