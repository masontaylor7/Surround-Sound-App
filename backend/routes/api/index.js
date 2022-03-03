const router = require('express').Router();

router.post('/test', function (req, res) {
    res.json('this is inside of the /api/test router!')
})

module.exports = router;
