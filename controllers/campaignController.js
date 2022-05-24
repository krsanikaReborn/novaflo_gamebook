const models = require('../models')

exports.getCampaignAll = async( req, res, next) => {
    try{
        const campaignsAll = await models.campaigns.findAll();
        res.send(campaignsAll); 
    }catch(err){
        console.error(err);
        next(err);
    }
}

exports.getCampaignOne = async(req, res, next) => {
    const id = parseInt(req.params.id);
    const campaignsOne = await models.campaigns.findOne({where : {"id" : id}});
    res.send(campaignsOne);
}




