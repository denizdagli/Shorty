const router = require('express').Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.landingPage);
router.get('/login', pageController.loginPage);
router.get('/register', pageController.registerPage);
router.get('/home', pageController.homePage); 

module.exports = router;