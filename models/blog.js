const mongoose = require("mongoose")
const schema = require("mongoose").Schema;

const blogSchema = schema({
    title:{
        type: String,
        required:true
    },
    snippet:{
        type: String,
        required : true
    },
    body:{
        type: String,
        required:true
    }

},{timestamps:true})

module.exports = blogSchema

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog