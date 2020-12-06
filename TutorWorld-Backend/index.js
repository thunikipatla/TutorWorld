var express = require('express');

var mongoose = require('mongoose');
var cors = require('cors');
// const e = require('express');

var TutorRoute = require('./routes/tutor.route');
var ParentRoute = require('./routes/parent.route');

mongoose.connect('mongodb://localhost/tutorworld', {useNewUrlParser: true, useUnifiedTopology: true },function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('DB connected..!')
    }
})

var app = express();
app.use(express.json());
app.use(cors());

app.use('/v1/tutor',TutorRoute);
app.use('/v1/parent', ParentRoute);


app.listen('9012', function(){
    console.log('Server started on port 9012');
})