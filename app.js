const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controllers/userrouter")
const detailsRouter=require("./controllers/detailsrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://devadathan:10028030@cluster0.knxmb.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/details",detailsRouter)
app.use("/api/resume",userRouter)
app.listen(3001,()=>{
    console.log("Server Running")
})