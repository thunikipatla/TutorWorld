var mongoose = require('mongoose');

module.exports = mongoose.model('Tutor', {
    firstname: {
        type: String,
        required: [true, 'first name is required']
    },
    lastname: {
        type: String, 
        required: [true, 'last name is required']
    },
    email: {
        type: String, 
        required: [true, 'email Id is required'],
        validate:{
            validator: function(value){
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: function(props){
                return '${props.value} is not an valid email id'
            }
        }
    },
    phone: {
        type: String, 
        required: [true, 'phone number is required']
    }, 
    password: {
        type: String, 
        required: [true, 'password is required']
    },
    qualification:{
        type: String, 
        required: [true, 'qualifiaction is required']
    },
    subjects: {
        type: String,
        required: [true, 'subjects are mandatory']
    },
    timings: {
        type: String, 
        required: [true, 'timings are required']
    },
    experience: {
        type: String, 
        required: [true, 'timings are required']
    },
    rating: {
        type: String, 
    
    },
    city: {
        type: String,
    },
    area: {
        type: String
    },
    imgsrc: {
        type: String,
    }

})