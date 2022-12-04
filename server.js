const express = require("express")
const ejs = require("ejs")

const blogRoute = require("./routes/blogroutes")

require('dotenv').config()

const app=express()
app.set("view engine","ejs")
app.use("/",(req,res,next)=>{
    console.log(req.url);
    next()
})
app.use("/static",express.static("public"))

app.use('/',blogRoute)

app.listen(process.env.PORT,err=>console.log("server running on port :" + process.env.PORT))