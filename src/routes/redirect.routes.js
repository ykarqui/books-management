const { Router } = require('express');
const router = Router();
const _ = require('lodash');

router.get('/', (req, res) => {
    res.redirect('http://localhost:3000/api/book');
})

module.exports = router;