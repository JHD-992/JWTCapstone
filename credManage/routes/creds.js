var express = require('express');
var router = express.Router();
const findCred = require('../controllers/findCred_controller');

/* GET users listing. */
router.get('/', findCred.findCreds);

module.exports = router;
