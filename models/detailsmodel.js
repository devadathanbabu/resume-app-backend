const mongoose=require("mongoose")
const router = require("../controllers/userrouter")
const detailsSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        about_me:{
            type:String,
            required:true
        },
        eMail:{
            type:String,
            required:true
        },
        mobileNo:{
            type:String,
            required:true
        },
        highest_qualification:{
            type:String,
            required:true
        },
        marks:{
            type:String,
            required:true
        },
        year:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        projects:{
            type:String,
            required:true
        },
        pfphoto_url:{
            type:String,
            required:true
        },  

    }
)
module.exports=mongoose.model("userdetails",detailsSchema)