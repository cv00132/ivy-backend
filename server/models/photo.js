'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    title: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
       associate: function(models) {
         Photo.belongsTo(models.User, { foreignKey:'userId' });
    //     Photo.hasMany(models.Comments, {
    //         through: {
    //             foreignKey: 'photoId'
    //         }
    //     });
    //     Photo.belongsToMany(models.Tags, {
    //         through: {
    //             model: 'PhotoTags',
    //             foreignKey: 'photoId'
    //         }
    //     });
       }
     }
  });
  return Photo;
};
