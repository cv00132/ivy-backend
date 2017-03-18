'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('Tags', 'tag', 'text');
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.renameColumn('Tags', 'text', 'tag');
  }
};
