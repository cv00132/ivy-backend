'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //   Comments.belongsTo(models.User);
        //   Comments.belongsTo(models.Photo);
      }
    }
  });
  return Comments;
};
