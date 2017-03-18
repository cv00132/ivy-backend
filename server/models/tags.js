'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tags = sequelize.define('Tags', {
    tag: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //Tags.belongsToMany( models.Photo, { through: { models: 'Phototags' }, foreignKey: 'tagId' })
      }
    }
  });
  return Tags;
};
