'use strict';
module.exports = function(sequelize, DataTypes) {
  var PhotoTags = sequelize.define('PhotoTags', {
    photoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        PhotoTags.belongsTo( models.Tags, {
            through: {
                model: 'PhotoTags',
                foreignKey: 'tagId'
            }
        });
        PhotoTags.belongsTo( models.Photo, {
            through: {
                model: 'PhotoTags',
                foreignKey: 'photoId'
            }
        });
      }
    }
  });
  return PhotoTags;
};
