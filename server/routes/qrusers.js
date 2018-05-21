const express=require('express');
const router=express.Router();
const passport= require('passport');
const jwt =require('jsonwebtoken');

const User=require('../models/user');
const usercontroller=require('../controller/usercontroller');
const config=require('../config/database');
//Register

router.post('/register',(req,res,next)=>{
    let newUser= new User({
        first_Name: req.body.firstName,
        last_Name: req.body.lastName,
        mobile_Number: req.body.mobileNumber,
        email: req.body.email,
        password:req.body.password
        
    });
    console.log('registered'+ newUser);
    usercontroller.registeruser(newUser,(err,user)=> {
        if(err){
                    console.log("error Bro..."+ err)
                    res.send({failure:false, msg:'Failed to registered user'});
                }else{
                    console.log("Success Bro...");
                    res.send('User Registered');
                }
    })
});

router.post('/authenticate', (req,res)=>{
    console.log(req.body);
    var candidatePassword=req.body.password;
    var newemail=req.body.email;
    
    usercontroller.verifyEmail(newemail, (err,isEmailMatch)=>{
        if(err) throw err;
        if(isEmailMatch){
            // User.verifyPassword(candidatePassword,isEmailMatch.password,(err,isMatch)=>{
            //     if(err) throw err;
            //     if(isMatch){
            //         res.send("Login Successfull");
            //     }
            //     else{
            //         res.send("Invalid username or password");
            //     }
            // });
           // res.send("success in email verify");
           var details={user_id:'1234'};
           if(candidatePassword===isEmailMatch.password){


            var token=jwt.sign({details},config.secret);
            console.log(candidatePassword===isEmailMatch.password);
            console.log(token);
            res.json({'msg':"Login Successfull", access_token:token});
           }
           else{
            res.json("Invalid username or password");
           }
        }
        else{
            res.json("Invalid username or password");
        }
    })

});

    router.post('/verifytoken' ,(req,res)=>{

        if(req.body.token){
            var token=req.body.token;
            try{
                var decoded=jwt.verify(token,config.secret);
                res.json({'msg':"Success"});
            }catch(error){
            console.log("wrong token")
            res.json({'msg':"Wrong token"});
        }
    }

});

module.exports=router;