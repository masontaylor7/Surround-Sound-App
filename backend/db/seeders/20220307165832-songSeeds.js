'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        title: 'Test Song 1',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        userId: 1
      },
      {
        title: 'Test Song 2',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
        userId: 1
      },
      {
        title: 'Test Song 3',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
        userId: 1
      },
      {
        title: 'Test Song 4',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
        userId: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
