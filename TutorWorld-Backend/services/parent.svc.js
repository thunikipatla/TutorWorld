var ParentModel = require('../models/ParentRegistration.model')

class Parentservice{
    create(data){
        var parent = new ParentModel(data);
        return parent.save();
    }
    getbyphone(phone){
        return ParentModel.findOne({phone});
    }
}

module.exports = new Parentservice();