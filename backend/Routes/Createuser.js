const express=require('express')
const router=express.Router()
const User=require('../models/User');

const { body, validationResult } = require('express-validator');

const bcrypt=require("bcryptjs");
const jwtSecret="kimtaehyungminyoongisugajeonjungkookjhopeparkjunghoseokjiminkimseokjinnamjoonagustd"
const jwt=require("jsonwebtoken");

router.post("/createuser",[
body('email','incorrect email').isEmail(),
body('name').optional().isLength({ min: 6 }),
body('location').optional().isLength({ min: 6 }),
 body('password','incorrect password').optional().isLength({ min: 6 })],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }
    const salt=await bcrypt.genSalt(7);
    let secPassword=await bcrypt.hash(req.body.password,salt)
    try {
         await  User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
     res.json({success:true});
     console.log(res)
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})
router.post("/loginuser",
   [ body('email','incorrect email').isEmail(),
    body('password','incorrect password').optional().isLength({ min: 6 })],
    async(req,res)=>{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()});
    }
      let email=req.body.email;
        
        try {
            let userData= await  User.findOne({email});
             if(!userData){
                return res.status(400).json({errors:"try logging in again correctly"});
             }
             const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
             if(!pwdCompare){
                return res.status(400).json({errors:"try logging in again correctly"});
             }
             const data={
                user:{
                    id:{
                        id:userData.id
                    }
                }

             }
             const authToken=jwt.sign(data,jwtSecret)
         res.json({success:true,authToken:authToken});
         console.log(res)
        } catch (error) {
            console.log(error);
            res.json({success:false});
        }
    })
module.exports=router;
