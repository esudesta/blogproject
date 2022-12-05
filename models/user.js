const mongoos = require("mongoose")
const schema = mongoos.Schema

const userSchema = new schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoos.model("User",userSchema)