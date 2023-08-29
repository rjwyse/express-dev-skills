var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skillls');


//All actual paths start with "/skillls"

//GET /SKILLD
router.get('/', skillsCtrl.index);
//GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
