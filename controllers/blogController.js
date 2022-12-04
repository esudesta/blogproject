const express = require("express")

function blogs_all(req,res){
    res.render("index")
}

module.exports = {
    blogs_all
}