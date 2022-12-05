const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
router.get("/login",(req,res)=>{
    res.render("auth/login")
})
router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if (!user){
        return res.redirect("/login")
    }
    const  isMatch = bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.redirect("/login")
    }
    req.session.isAuth = true
    res.redirect("/")
})
router.get("/register",(req,res)=>{
    res.render("auth/signup")
})
router.post("/register",async (req,res)=>{
    const {username,password} = req.body
    let user = await User.findOne({username})
    if(user){
       return res.redirect("/register")
    }

    const hashedPass = await bcrypt.hash(password,12)
    user = new User({
        username,
        password:hashedPass
    })

    await user.save()
    res.redirect("/login")
    // res.render()
})

router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            console.log("can't logout: "+err);
        }
        else{
            res.redirect("/login")
        }
    })
})


module.exports = router