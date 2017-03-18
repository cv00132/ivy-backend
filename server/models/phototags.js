'use strict';
module.exports = function(sequelize, DataTypes) {
  var PhotoTags = sequelize.define('PhotoTags', {
    photoId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // PhotoTags.belongsToMany( models.Tags, {
        //     through: {
        //         model: 'PhotoTags',
        //         foreignKey: 'tagId'
        //     }
        // });
        // PhotoTags.belongsToMany( models.Photo, {
        //     through: {
        //         model: 'PhotoTags',
        //         foreignKey: 'photoId'
        //     }
        // });
      }
    }
  });
  return PhotoTags;
};
