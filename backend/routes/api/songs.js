const express = require('express');
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models')
console.log(`\n\n\n\n\n ${Song} \n\n\n\n\n`)

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({
        include: [db.User]
    });
    return res.json({
        songs
    })
}));

module.exports = router;
