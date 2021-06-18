var express = require('express');
var router = express.Router();
const updateCred = require('../controllers/updateCred_controller');

/* GET users listing. */
router.get('/', updateCred.updateCreds);

module.exports = router;
