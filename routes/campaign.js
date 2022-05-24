var router = require('express').Router();
const campaignController = require('../controllers/campaignController');
/* GET users listing. */

router.get("/", campaignController.getCampaignAll);

router.get("/:id", campaignController.getCampaignOne);

//router.get("/:id", campaignController.getUserById);

module.exports = router;
