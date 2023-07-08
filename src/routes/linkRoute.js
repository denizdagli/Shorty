const router = require('express').Router();

const controller = require('../controllers/linkController');

router.get('/', controller.getPage);
router.post('/', controller.createLink);
router.get('/:code', controller.redirect);

module.exports = router;