const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Song, User, Playlist } = require('../../db/models')

const router = express.Router();

const validatePlaylistEntry = [
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid name for the playlist'),
    handleValidationErrors
]

// 'api/playlists/user/:userId
router.get('/user/:userId',
    asyncHandler(async (req, res) => {
        const { userId } = req.params;
        const playlists = await Playlist.findAll({
            where: {
                userId: userId
            },
            include: [ User, Song ]
        });
        return res.json({
            playlists
        })
    }));

router.post('/',
    validatePlaylistEntry,
    asyncHandler(async (req, res) => {
        const { name, imageUrl, notViewable, userId } = req.body
        const playlist = await Playlist.create({
            name,
            imageUrl,
            private: notViewable,
            userId
        });
        return res.json(playlist);
    }));

router.delete('/:playlistId',
    asyncHandler(async (req, res) => {
        const { playlistId } = req.params;
        const playlist = await Playlist.findByPk(playlistId);
        playlist.destroy();
        return res.json(playlist);
    }));

router.put('/:playlistId',
    asyncHandler(async (req, res) => {
        const { newName, newImageUrl, updateNotViewable, userId } = req.body
        const { playlistId } = req.params;

        const playlist = await Playlist.findByPk(playlistId, {
            include: User
        });
        playlist.update({ name: newName, imageUrl: newImageUrl, private: updateNotViewable, userId });
        return res.json(playlist)
}))

module.exports = router;
