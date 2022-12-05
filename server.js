const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")

const blogRoute = require("./routes/blogroutes")

require('dotenv').config()
const app=express()



app.use(express.urlencoded({ extended:true }));
app.set("view engine","ejs")

app.use("/",(req,res,next)=>{
    console.log(req.url);
    next()
})
app.use("/static/",express.static("public"))

app.use('/',blogRoute)

mongoose.connect(process.env.DATABASE_URL).then(result=>{
    console.log("connected to db");
    app.listen(process.env.PORT,"0.0.0.0",err=>console.log("server running on port :" + process.env.PORT))
}).catch(err=>{
    console.log(err);
})
