'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists', [
      {
        name: 'Favorites',
        imageUrl: 'https://qtxasset.com/quartz/qcloud5/media/image/fiercebiotech/1568212087/connor-wells-534089-unsplash.jpg/connor-wells-534089-unsplash.jpg?VersionId=ULXSKHnqdr4MlO.aAGeXiXTpP8t9b_qP',
        private: true,
        userId: 1
      },
      {
        name: 'Drives',
        imageUrl: 'https://autoapp.sg/wp-content/uploads/2020/10/autoapp-singapore-car-concierge-driving-music-1-cover.jpg',
        private: true,
        userId: 1
      },
      {
        name: 'Art Inspo',
        imageUrl: 'https://discountartncraftwarehouse.com.au/dac/assets/media/pros-cons-acrylic-paint.jpg',
        private: true,
        userId: 1
      },
      {
        name: 'Headbangers',
        imageUrl: 'https://theimpactnews.com/wp-content/uploads/2016/12/13495413_10154150371496877_5507887040046596957_o-900x600.jpg',
        private: true,
        userId: 1
      },
      {
        name: 'Acoustics',
        imageUrl: 'https://media.istockphoto.com/photos/aciustic-guitar-picture-id155076855?b=1&k=20&m=155076855&s=612x612&w=0&h=QjZf-XWcErafVS7uPSaYLN8CG0xYMcdeQ5zA1Vb6U_I=',
        private: true,
        userId: 1
      },
      {
        name: 'Classics and Throwbacks',
        imageUrl: 'https://extrachill.com/wp-content/uploads/2021/03/led-zeppelin-logos.jpeg',
        private: true,
        userId: 1
      },
      {
        name: 'Test Playlist 1',
        imageUrl: '',
        private: false,
        userId: 1
      },
      {
        name: 'Test Playlist 2',
        imageUrl: '',
        private: false,
        userId: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
