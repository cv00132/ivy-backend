'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tags = sequelize.define('Tags', {
    text: DataTypes.STRING
  }, {
    classMethods: {
    //   associate: function(models) {
    //     Tags.belongsToMany( models.Photo, {
    //         through: {
    //             model: 'PhotoTags',
    //             foreignKey: 'photoId'
    //         }
    //     });
    //     }
    //   }
     }
  });
  return Tags;
};
