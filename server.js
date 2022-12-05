const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const session = require("express-session")
var MongoDBStore = require('connect-mongodb-session')(session);

const blogRoute = require("./routes/blogroutes");
const authRoute = require("./routes/auth")

const e = require("express");

require('dotenv').config()
const app=express()

app.use(express.urlencoded({ extended:true }));
app.set("view engine","ejs")

var store = new MongoDBStore({
    uri: process.env.DATABASE_URL,
    collection: 'mySessions'
  });
store.on('error', function(error) {
    console.log(error);
  });


app.use(session({
    secret:"this is my seccret",
    resave:false,
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
      },
    store: store,
}))

app.use("/",(req,res,next)=>{
    console.log(req.url);
    next()
})
app.get("/session",(req,res)=>{
    req.session.isAuth = true
    console.log(req.session.id);
    res.send("session")
})

app.use(authRoute)

app.use("/static/",express.static("public"))

app.use('/',blogRoute)

mongoose.connect(process.env.DATABASE_URL).then(result=>{
    console.log("connected to db");
    app.listen(process.env.PORT,"0.0.0.0",err=>console.log("server running on port :" + process.env.PORT))
}).catch(err=>{
    console.log(err);
})



