const User = require('../models/userSchema');
const mongoose = require ( 'mongoose' );
const jwt = require('jsonwebtoken');

exports.findUser = function (req, res) {

    const uri = 'mongodb+srv://JHDreyer:Greywind1992@cluster0.odfbu.mongodb.net/creds?retryWrites=true&w=majority';
    mongoose.Promise = global.Promise;

    mongoose.connect(uri, {});

    mongoose.connection.on( 'error' , function () {
        console .log( 'Connection to Mongo established.' );
        console .log( 'Could not connect to the database. Exiting now...' );
        process.exit();
    });

    mongoose.connection.once( 'open' , function () {
        console.log('Database connected');
    });

    User.find({username: req.query.username} , function(err, person){
        if(err) {
            console.log(err);
            res.status(500).send({message: "An error occured trying to retrieve user data"});
        }
        else {
            const token = jwt.sign(JSON .stringify(person[0]), 'jwt-secret' ,
            {algorithm: 'HS256' })
            res.send({ 'token' : token})
        }
    });
}