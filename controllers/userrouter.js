const express=require("express")
const userModel=require("../models/usermodel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

// signup

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let user=new userModel(data)
    let result=await user.save()
    res.json(
        {
            status:"success"
        }
    )

})

// signin

router.post("/signin",async(req,res)=>{
    let input=req.body
    let eMail=req.body.eMail
    let data=await userModel.findOne({"eMail":eMail})
    if(!data)
    {
        return res.json(
            {
                status:"Invalid UserName"
            }
        )
    }
    let dbPassword=data.password
    let inputPassword=req.body.password
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"Incorrect Password"
            }
        )
    }
    res.json(
        {
            status:"success"
        }
    )
})

module.exports=router