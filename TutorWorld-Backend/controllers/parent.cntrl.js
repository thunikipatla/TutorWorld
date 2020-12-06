var ParentService = require('../services/parent.svc');
var jwt = require('jsonwebtoken');
// var request = require('request');

class Parentcontroller {
    async registration(req,res){
        try{
            var phone = await ParentService.getbyphone(req.body.phone);
            if(phone){
                res.status(409);
                res.send({status: false, description: 'Mobile number is already registred'})
            }
            else{
                var parentdetail = await ParentService.create(req.body);
                console.log(req.body);
                var token = jwt.sign({phone:parentdetail}, 'secreat', {expiresIn: 60*60});
                res.status(201);
                res.send({status: true, token});
            }

        }
        catch(err){
            console.log(err);
            res.status(500);
            res.send({status: 'server error', errorDescription: err});
        }
    }
    async parentlogin(req,res){
       try{
        var phone = await ParentService.getbyphone(req.body.phone);
        if(phone){
            var enterpassword = req.body.password;
            if(enterpassword === phone.password){
                var token = jwt.sign({phone:phone}, 'secreat', {expiresIn: 60*60});
                res.status(200);
                res.send({status: true, token});
                
            }
            else{
                res.status(404);
                res.send({status: false, description: 'invalid password'});
            }
        }
        else{
            res.status(404);
            res.send({status: false, description: 'Mobile number not registred'});
        }

       }
       catch(err){
        console.log(err);
        res.status(500);
        res.send({status: 'server error', errorDescription: err});
       }
    }
}

module.exports = new Parentcontroller();