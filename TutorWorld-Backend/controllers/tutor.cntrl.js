var TutorService = require('../services/tutor.svc');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

class Tutorcontroller{
    async registration(req,res){
        try{
            console.log(req.body.phone);
            var phone = await TutorService.getbymobile(req.body.phone);
            console.log(phone);
            if(phone){
                res.status(409);
                res.send({status: 'mobile number is already exists', description: 'mobile already registred'});
            }
            else{
                var user = await TutorService.create(req.body);
                console.log(req.body);
                console.log('printing console log');
                var token = jwt.sign({'mobile': user.phone}, 'secreat', {expiresIn: 60 *60});
                res.status(201);
                res.send({'token': token, status: 'registartion done', user});
            }

        }
        catch(err){
            console.log(err);
            res.status(500);
            res.send({status: 'server error', errorDescription: err})
        }
    }
    async getalltutors(req,res){
        try{
            var tutors = await TutorService.getalltutor();
            tutors.map(tutor=>{
                tutor.imgsrc = `${req.protocol}://${req.host}:9012/${tutor.imgsrc}`
            })
            res.status(200);
            res.send({status:true, tutors});
        }
        catch(err){
            console.log(err);
            res.status(500);
            res.send({status: 'server error', errorDescription: err});
        }
    }
    async tutorlogin(req,res){
        try{
            var phone = await TutorService.getbymobile(req.body.phone);
            var enteredpassword = req.body.password;
            if(phone){
                if(enteredpassword === phone.password){
                    var token = jwt.sign({'phone': phone}, 'secreat', {expiresIn: 60*60});
                    res.status(200);
                    res.send({status: true, token});
                }
                else{
                    res.status(404);
                    res.send({status: false, description: 'incorrect password'})
                }
            }
            else{
                res.status(404);
                res.send({status: false, description: 'mobile number not registred'})
            }

        }
        catch(err){
            console.log(err);
            res.status(500);
            res.send({status: 'server error', errorDescription: err});
        }
    }
    async tutorprofile(req,res){
        var decodedtoken = jwt.decode(req.headers.token, {complete: true});
        res.status(200);  
        res.send({status: true, decodedtoken})
    }
    async tutorsearch(req,res){
        try{
            var subjects_body = req.body.subjects;
            
            var new_subject = "[ /" + req.body.subjects + "/ ]";
            // console.log(new_subject);
            var tutor_list = await TutorService.getbysubjects(new_subject);
            console.log(tutor_list);
            
            if(tutor_list.length > 0){
                
                res.status(200);
                res.send({status: "true", tutor_list});
            }
            else{
                res.status(409);
                res.send({status: "false", description: "No tutor foud with your serach"});
            }

        }
        catch(err){
            res.status(500);
            console.log(err);
            res.send({status: 'server error', errordescription: err})
        }
    }
    async requestdemo(req,res){
        try{
            var parent_details = jwt.decode(req.headers.token, {complete: true});
            // console.log(parent_details.payload.phone.firstname);
            let testAccount = await nodemailer.createTestAccount();

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'srinivastece@gmail.com',
                  pass: 'srini@CDK2'
                }
              });
            var mailOptions = {
                from: 'srinivastece@gmail.com',
                to: req.body.email,
                subject: 'congratulation..! You have got a new demo request',
                html: `<html>
                    <head>

                    </head>
                    <body>
                    <h3> Hey ${parent_details.payload.phone.firstname} ${parent_details.payload.phone.lastname} requested a demo from you, please contact him/her if you have intrested.</h3>

                    <h3>Email: ${parent_details.payload.phone.email}</h3>
                    <h3>Phone: ${parent_details.payload.phone.phone}</h3>
                    <h4>All the best..</h4>

                     
                    </body>
                </html>`
              };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                //   console.log('Email sent: ' + info.response);
                res.status(200);
                res.send({status: true, description:info.response})
                }
              });

        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: 'server error', Description: error});
        }
        


    }
}

module.exports = new Tutorcontroller();