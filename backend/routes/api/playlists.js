const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Song, User, Playlist } = require('../../db/models')

const router = express.Router();

// 'api/playlists/user/:userId
router.get('/user/:userId',
    asyncHandler(async (req, res) => {
        const { userId } = req.params;
        const playlists = await Playlist.findAll({
            where: {
                userId: userId
            },
            include: User
        });
        return res.json({
            playlists
        })
    }));


module.exports = router;
