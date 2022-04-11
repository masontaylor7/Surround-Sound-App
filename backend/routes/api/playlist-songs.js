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
            return null;
        }
    }));

router.get('/',
    asyncHandler(async (req, res) => {
        const data = await Playlist_Song.findAll();
        return res.json({
            data
        })
    }))

router.get('/:playlistId',
    asyncHandler(async (req, res) => {
        const { playlistId } = req.params;
        const entries = await Playlist_Song.findAll({
            where: {
                playlistId
            }
        })
        return res.json(entries)
    }))

router.delete('/:playlistId/:songId',
    asyncHandler(async (req, res) => {
        const { playlistId, songId } = req.params;
        const song = await Playlist_Song.findOne({
            where: {
                playlistId,
                songId
            }
        })
        // remove the song from the playlist:
        song.destroy();
        return res.json(song);
    }))




module.exports = router;
