const User = require('../models/userSchema');
const mongoose = require('mongoose');

exports.updateRole = function (req, res) {
  const uri = 'mongodb+srv://JHDreyer:Greywind1992@cluster0.odfbu.mongodb.net/creds?retryWrites=true&w=majority';
  mongoose.Promise = global.Promise;

  mongoose.connect(uri, {
  });

  mongoose.connection.on( 'error' , function () {
    console .log( 'Connection to Mongo established.' );
    console .log( 'Could not connect to the database. Exiting now...' );
    process.exit();
  });

  mongoose.connection.once( 'open' , function () {
    console.log('Database connected');
  });

  User.findOneAndUpdate({username: req.query.username}, {userRole: req.query.userRole}, {new: true}, function (err, doc){
    if(err) {
        console.log("Error encountered when updating data");
    }
        res.send("Information updated. Please go back a page and refresh.");
    });
}