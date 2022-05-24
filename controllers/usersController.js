
exports.getUserById = async( req, res, next) => {
    try{
        const id = (req.params.id);
        const user = await models.users.findOne({where : {"id" : id}});
        res.send(user);
    }catch(err){
        console.error(err);
        next(err);        
    }
}

exports.getUserByICode = async( req, res, next) => {
    try{
        const icode = req.params.icode;
        const user = await models.users.findOne({where : {"icode" : icode}});
        res.send(user);
    }catch(err){
        console.error(err);
        next(err);        
    }
}

addUser= (params) => {
    console.log(params);

}