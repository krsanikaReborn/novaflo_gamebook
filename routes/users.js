var router = require('express').Router();
const usersController = require('../controllers/usersController');
/* GET users listing. */


router.get("/", usersController.getUserById);

router.get("/code:icode", usersController.getUserByICode);

router.get("/test", function(req, res, next){
    let { id } = req.query
    console.log(id);

    res.send('respond with a resource');
});

module.exports = router;
