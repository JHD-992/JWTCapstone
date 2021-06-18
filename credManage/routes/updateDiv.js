var express = require('express');
var router = express.Router();
const updateDiv = require('../controllers/updateDiv_controller');

/* GET users listing. */
router.get('/', updateDiv.updateDiv);

module.exports = router;
