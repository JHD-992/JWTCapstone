var express = require('express');
var router = express.Router();
const updateRole = require('../controllers/updateUserRole_controller');

/* GET users listing. */
router.get('/', updateRole.updateRole);

module.exports = router;
