var express = require('express');

var router = express.Router();

var TutorCotroller =  require('../controllers/tutor.cntrl');

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req,file,cb)=>{
        let filename = Date.now() + "-" + file.originalname;
        req.body.imgsrc = filename;
        cb(null, filename);
    }
})
var uploadimage = multer({storage});

router.post('/registration', uploadimage.single('image'), TutorCotroller.registration);
router.get('/alltutors', TutorCotroller.getalltutors);
router.post('/tutorlogin', TutorCotroller.tutorlogin);
router.get('/profile', TutorCotroller.tutorprofile);
router.get('/search', TutorCotroller.tutorsearch);
router.post('/tutordemo', TutorCotroller.requestdemo);

module.exports = router;