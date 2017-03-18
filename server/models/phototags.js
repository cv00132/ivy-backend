'use strict';
module.exports = function(sequelize, DataTypes) {
  var PhotoTags = sequelize.define('PhotoTags', {
    photoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PhotoTags;
};