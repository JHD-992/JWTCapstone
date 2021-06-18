var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    //get the contents of the authorization header
    const auth = req.headers[ 'authorization' ]
    //break the header up and collect the payload.
    const token = auth.split( ' ' )[ 1 ]
    try {
        //decode the payload using specific JWT key and print out name
        const decoded = jwt.verify(token, 'jwt-secret' )
        //find news management user role
        if (decoded.orgUnit == 'News Management' && decoded.userRole == 'Admin'){
            res.send({ 'role' : 'NewsAdmin'});
        }
        else if (decoded.orgUnit == 'News Management' && decoded.userRole == 'Management'){
            res.send({ 'role' : 'NewsManage'});
        }
        else if (decoded.orgUnit == 'News Management' && decoded.userRole == 'User'){
            res.send({ 'role' : 'NewsUser'});
        }

        //find software reviews user role
        else if (decoded.orgUnit == 'Software Reviews' && decoded.userRole == 'Admin'){
            res.send({ 'role' : 'SoftAdmin'});
        }
        else if (decoded.orgUnit == 'Software Reviews' && decoded.userRole == 'Management'){
            res.send({ 'role' : 'SoftManage'});
        }
        else if (decoded.orgUnit == 'Software Reviews' && decoded.userRole == 'User'){
            res.send({ 'role' : 'SoftUser'});
        }

        //find hardware reviews user role
        else if (decoded.orgUnit == 'Hardware Reviews' && decoded.userRole == 'Admin'){
            res.send({ 'role' : 'HardAdmin'});
        }
        else if (decoded.orgUnit == 'Hardware Reviews' && decoded.userRole == 'Management'){
            res.send({ 'role' : 'HardManage'});
        }
        else if (decoded.orgUnit == 'Hardware Reviews' && decoded.userRole == 'User'){
            res.send({ 'role' : 'HardUser'});
        }

        //find opinion publishing user roles
        else if (decoded.orgUnit == 'Opinion Publishing' && decoded.userRole == 'Admin'){
            res.send({ 'role' : 'OpAdmin'});
        }
        else if (decoded.orgUnit == 'Opinion Publishing' && decoded.userRole == 'Management'){
            res.send({ 'role' : 'OpManage'});
        }
        else if (decoded.orgUnit == 'Opinion Publishing' && decoded.userRole == 'User'){
            res.send({ 'role' : 'OpUser'});
        }

        else {
            res.send({ 'role' : 'Undefined' });
        }
    }
    //catch block for if the JWT token is invalid 
    catch (err) {
        res.status( 401 ).send({ 'err' : 'Bad JWT!' });
    }
});
module.exports = router;
