const express = require('express');
const asyncHandler = require('express-async-handler');


const { Song, User, Playlist_Song } = require('../../db/models')

const router = express.Router();

router.post('/',
    asyncHandler(async (req, res) => {
        const { songId, playlistId } = req.body

        const existingSong = await Playlist_Song.findOne({
            where: {
                songId,
                playlistId
            }
        });

        if (existingSong === null) {
            const playlistSong = await Playlist_Song.create({
                songId,
                playlistId
            });
            return res.json(playlistSong);
        } else {
            return res.json("This song already exists")
        }
    }));

router.get('/:playlistId',
    asyncHandler(async (req, res) => {
        const { playlistId } = req.params;
        const playlistSongs = await Playlist_Song.findAll({
            where: {
                playlistId
            },
        })
        return res.json(playlistSongs.playlistSongs)
    }))



module.exports = router;
