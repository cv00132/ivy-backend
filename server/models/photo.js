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
    //     Photo.hasMany(models.Comments, { foreignKey:'photoId' });
    //     Photo.belongsToMany('Tag', {
    //         through: {
    //             model: 'PhotoTag',
    //             unique: false,
    //             scope: { taggable: 'photo'}
    //     },
    //     foreignKey: 'taggable_id',
    //     constraints: false
    // });
        // Photo.belongsToMany(models.Tags, {
        //     through: {
        //         models: 'PhotoTags',
        //         foreignKey:'photoId'
        //     }
        // })
      }
    }
  });
  return Photo;
};
