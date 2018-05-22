const User=require('../DAO/user');

module.exports.registeruser=function(user,callback){
    User.registerUser(user,callback);
}

module.exports.verifyEmail=function(email,callback){
  User.verifyEmail(email,callback);
}