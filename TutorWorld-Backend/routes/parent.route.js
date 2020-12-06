var express = require('express');
var router = express.Router();

var ParentController = require('../controllers/parent.cntrl');


router.post('/register', ParentController.registration);
router.post('/parentlogin',ParentController.parentlogin);

module.exports = router;