const express = require("express")
const Blog = require("../models/blog")

function get_blog(req,res){
    Blog.findById(req.params.id).then(result=>{
        res.render("detail",{result})
    }).catch(err=>{console.log(err);})

}

function all_blogs(req,res){
    Blog.find().sort({createdAt:-1}).then(result=>{
        // res.send(result)
        res.render("index",{result})
    }).catch(err=>{
        console.log(err);
    })
}
function get_add_blog(req,res){
    res.render("add")
}

function post_add_blog(req,res){
    console.log(req.body);
    const blog = new Blog(req.body)
    blog.save().then((result) => {
        res.redirect("/")
    }).catch((err) => {
        console.log(err);
    });
}

function delete_blog(req,res){
    Blog.findByIdAndDelete(req.params.id).then(data=>{
        res.send({redirect:"/"})
        console.log("blog deleted");
    }).catch(err=>{
        console.log(err);
    })
}

module.exports = {
    get_blog,
    all_blogs,
    post_add_blog,
    get_add_blog,
    delete_blog
}