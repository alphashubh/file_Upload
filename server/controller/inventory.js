const express=require('express');
const router=express.Router();
const inventory=require('../DAO/model_inventory');
const inventory_controller=require('../service/inventory_controller');

//AddQR
router.post('/addQr',(req,res,next)=>{
    console.log("generated",req.body);
    let newQrDetails=new inventory({
        user_id: "5a5cdbe5c6d6d523901aaee7",
        qr_Name:req.body.qrName,
        qr_Description:req.body.qrDescription
        
    });
   
    inventory.addQR(newQrDetails,(err,inventory)=>{

        if(err){
            console.log('error_qr...');
            res.send({failure:false ,msg:'qr not generated'});
        }else{
            console.log('success_qr...');
            res.send({success:true,msg:'qr generated successfully'});
        }
        
    });
});



module.exports=router;