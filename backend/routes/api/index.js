const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users')
const songsRouter = require('./songs')
const playlistRouter = require('./playlists')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/playlists', playlistRouter);


module.exports = router;
