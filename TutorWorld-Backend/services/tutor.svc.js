var TutorModel = require('../models/TutorRegistartion.model');

class Tutorservice{
    create(data){
        var tutor = new TutorModel(data);
        return tutor.save();
    }
    getalltutor(){
        return TutorModel.find();
    }
    getbymobile(phone){
        // return TutorModel.findById({mobile})
        return TutorModel.findOne({phone});
    }
    // getbysubjects(subjects){
    //     console.log(subjects);
        
    //     // return TutorModel.find({"subjects": subjects}).collation( { locale: 'en', strength: 2 } );
    //     return TutorModel.find({ "subjects": { $in:  subjects } }).collation( { locale: 'en', strength: 2 } );

        
    //     // return TutorModel.find({ $or: [{ "subjects": subjects }] }).collation( { locale: 'en', strength: 2 } );
        
    // }
    getbysubjects(value){
        console.log(value);
        // var new_value= { "subjects": { $in: value } }
        // console.log({ "subjects": { $in: value } })
        // console.log(JSON.stringify(new_value).replace(/"/g,""));        

        // return TutorModel.find({"subjects": subjects}).collation( { locale: 'en', strength: 2 } );
        return TutorModel.find({ "subjects": { $in: value } }).collation( { locale: 'en', strength: 2 } );
        
        // return TutorModel.find({ "subjects": { $in:  [ / value / ]  } }).collation( { locale: 'en', strength: 2 } );
        
    }
    // db.tutors.find({ "subjects": { $in: [ /Sciennce/ ] } })

    
    
}

module.exports = new Tutorservice();