'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tags = sequelize.define('Tags', {
    tag: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //Tags.belongsToMany(models.Photo, { through: models.photoTags, foreignKey:'photoId' })
      }
    }
  });
  return Tags;
};
