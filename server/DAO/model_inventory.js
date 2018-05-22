const mongoose=require('mongoose');
const config=require('../config/database');
mongoose.Promise = Promise;

var User=require('./user');

const QrInventorySchema=mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId ,
         ref :'User'
    },
    qr_Name:{
        type:String,
        reuired:true
    },
    qr_Description:{
        type:String,
        required:true
    },
    count:{
        type:Number
       // required:true
    }
});
const inventory=module.exports=mongoose.model('inventory',QrInventorySchema);

module.exports.addQR=function(newQrDetails,callback){
    newQrDetails.save(callback)
}