const router = require('express').Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.landingPage);
router.get('/login', pageController.loginPage);
router.get('/register', pageController.registerPage);
router.get('/home', pageController.homePage); 
router.get('/contactUs', pageController.contactUsPage);

module.exports = router;