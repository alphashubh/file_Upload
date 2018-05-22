const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const config=require('../config/database');
mongoose.Promise = Promise;

var inventory=require('./model_inventory');

const QrUserSchema=mongoose.Schema({
    
    first_Name:{
        type:String,
        required:true
    },
    last_Name:{
        type:String,
        required:true
    },
    mobile_Number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    inventoryDetails:[{type: mongoose.Schema.Types.ObjectId, ref: 'inventory'}]
});

const User=module.exports=mongoose.model('User', QrUserSchema);

module.exports.registerUser=function(newUser,callback){
    newUser.save(callback);
    }

module.exports.verifyEmail=function(email,callback){
    const query={email: email};
    User.findOne(query,callback);
}

// module.exports.verifyPassword=function(candidatePassword,dbpassword,callback){
//  (candidatePassword,dbpassword,(err,isMatch)=>{
//      if(err) throw err;
//      if(candidatePassword===dbpassword){
//          callback(null,isMatch);
//      }
//  });
// }
