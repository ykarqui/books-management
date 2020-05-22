const { Router } = require('express');
const router = Router();
const book = require('./book.routes.js');
const author = require('./author.routes.js');
const redirect = require('./redirect.routes.js');

router.use('/api/v1',book);
router.use('/api/v1',author);
router.use('/api',redirect);
router.use('/',redirect);
module.exports = router;