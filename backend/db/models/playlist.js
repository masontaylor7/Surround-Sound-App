'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    private: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsTo(models.User, { foreignKey: 'userId' })
    Playlist.belongsToMany(models.Song, {
      through: 'Playlist_Song',
      foreignKey: 'songId'
    })
  };
  return Playlist;
};
