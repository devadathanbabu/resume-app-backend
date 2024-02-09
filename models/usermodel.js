const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name :{
            type:String,
            required:true
        },
        age :{
            type:String,
            required:true
        },
        mobileNo:{
            type:String,
            required:true
        },
        eMail:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("user",userSchema)