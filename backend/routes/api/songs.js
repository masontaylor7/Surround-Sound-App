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
    console.log("this is the user", User)
    return res.json({
        songs
    })
}));

router.post('/',
    validateSongEntry,
    asyncHandler(async (req, res) => {
        const id = req.session.auth.userId;
        console.log(id)
        const { title, url } = req.body
        const song = await Song.create({
            title,
            password,
            userId: id,
        })
        return res.json({
            song
        })
}))

module.exports = router;
