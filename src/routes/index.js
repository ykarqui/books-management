const { Router } = require('express');
const router = Router();
const book = require('./book.routes.js');
const author = require('./author.routes.js');
const redirect = require('./redirect.routes.js');

router.use('/api',book);
router.use('/api',author);
router.use('/api',redirect);

module.exports = router;