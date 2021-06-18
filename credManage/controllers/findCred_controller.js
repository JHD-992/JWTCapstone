const User = require('../models/userSchema');
const mongoose = require('mongoose');

exports.findCreds = function (req, res) {
    const uri = 'mongodb+srv://JHDreyer:Greywind1992@cluster0.odfbu.mongodb.net/creds?retryWrites=true&w=majority';
    mongoose.Promise = global.Promise;

  mongoose.connect(uri, {
    useMongoClient: true
  });

  mongoose.connection.on( 'error' , function () {
    console .log( 'Connection to Mongo established.' );
    console .log( 'Could not connect to the database. Exiting now...' );
    process.exit();
  });

  mongoose.connection.once( 'open' , function () {
    console.log('Database connected');
  });

  User.find({orgUnit: req.query.orgUnit} , function(err, creds){
      if(err) {
          console.log(err);
          res.status(500).send({message: "An error occured fetching user data"});
      }
      else {
          res.send(creds);
      }
    });
}