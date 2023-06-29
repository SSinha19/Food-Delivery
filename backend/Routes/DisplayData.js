const express=require('express')
const router=express.Router()
router.post('/foodData',(req,res)=>{
    try {
      console.log(res);
        res.send([global.food_items,global.foodCategory])
    } catch (error) {
        console.error( error.message )       
  res.send("error message")    }
})
module.exports=router;