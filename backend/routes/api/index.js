const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);


router.post('/test', function (req, res) {
    res.json('this is inside of the /api/test router!')
});


module.exports = router;
