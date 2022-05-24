var router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');
/* GET users listing. */

router.post("/tokens", authController.create);
//router.get("/:id", campaignController.getUserById);
router.get('/user', passport.authenticate('jwt', {session : false}), usersController.getUserByICode);

module.exports = router;
