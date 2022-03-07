'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};
