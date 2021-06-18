var express = require('express');
var router = express.Router();
const addUser = require('../controllers/registerUser_controller');

/* GET users listing. */
router.get('/', addUser.addUser);

module.exports = router;
