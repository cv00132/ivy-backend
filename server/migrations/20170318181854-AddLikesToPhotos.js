'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn('Photos', 'Likes', Sequelize.INTEGER );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Photos', 'Likes', Sequelize.INTEGER );
  }
};
