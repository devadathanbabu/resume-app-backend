const express=require("express")
const router=express.Router()
const detailsModel=require("../models/detailsmodel")
const usermodel = require("../models/usermodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let details=new detailsModel(data)
    let result=await details.save()
    res.json(
        {
            status:"success"
        }
    )
})
router.get("/viewall",async(req,res)=>{
    let result=await detailsModel.find()
    res.json(result)
})

module.exports=router