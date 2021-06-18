var express = require('express');
var router = express.Router();
const findUser = require('../controllers/findUser_controller');

/* GET users listing. */
router.get('/', findUser.findUser);

module.exports = router;
