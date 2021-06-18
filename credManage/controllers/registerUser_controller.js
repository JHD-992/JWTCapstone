const User = require('../models/userSchema');
const mongoose = require ( 'mongoose' );

exports.addUser = function (req, res) {

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

    let UserModel = new User({name: req.query.name, orgUnit: req.query.orgUnit, division: req.query.division, username: req.query.username, password: req.query.password});

    UserModel.save(function(err, data){
        if(err) {
            console.log(err);
            res.status(500).send({message: "An error occurered while trying to save the task"});
        }
        else {
            console.log(data);
            res.send({'msg': 'The user has been added to the database. Please return to home page'});
        }
    });
}