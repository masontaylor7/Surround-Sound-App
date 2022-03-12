const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Song, User } = require('../../db/models')

const router = express.Router();

const validateSongEntry = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ max: 200 })
        .notEmpty()
        .withMessage('Please provide a valid title for the song'),
    check('url')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid URL for audio'),
    handleValidationErrors
]

router.get('/',
    asyncHandler(async (req, res) => {
        const songs = await Song.findAll({
            include: User
        });
        return res.json({
            songs
        })
    }));

router.post('/',
    validateSongEntry,
    asyncHandler(async (req, res) => {
        const { title, url, userId } = req.body
        const song = await Song.create({
            title,
            url,
            userId,
        })
        const specificSong = await Song.findByPk(song.id, {
            include: User
        })
        return res.json(specificSong)
    }));

router.delete('/:songId',
    asyncHandler(async (req, res) => {
        const { songId } = req.params;
        const song = await Song.findByPk(songId);
        song.destroy();
        return res.json(song);
    }));

router.put('/:songId',
    asyncHandler(async (req, res) => {
        const { newTitle, newUrl, userId } = req.body
        const { songId } = req.params;

        const song = await Song.findByPk(songId, {
            include: User
        });
        song.update({title: newTitle, url: newUrl, userId})
        return res.json(song)
    })
)

module.exports = router;
