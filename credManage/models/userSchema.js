const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    orgUnit:  {
        type:String,
        required:true
    },
    division:{
        type:String,
        required:true
    },
    userRole: {
        type:String,
        required:false,
        deefault: "User"
    },
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});

const User = mongoose.model('cred', UserSchema);

module.exports = User;