'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.renameColumn('Tags', 'tag', 'text');
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.renameColumn('Tags', 'text', 'tag');
  }
};
