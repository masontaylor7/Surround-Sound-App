const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users')
const songsRouter = require('./songs')
const playlistRouter = require('./playlists')
const playlistSongsRouter = require('./playlist-songs')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/playlists', playlistRouter);
router.use('/playlist-songs', playlistSongsRouter)


module.exports = router;
