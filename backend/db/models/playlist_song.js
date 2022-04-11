'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist_Song = sequelize.define('Playlist_Song', {
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
    },
    playlistId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
    }
  }, {});
  Playlist_Song.associate = function(models) {
    // associations can be defined here
  };
  return Playlist_Song;
};
