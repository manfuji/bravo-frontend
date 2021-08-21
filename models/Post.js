import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    picture:{
        type:Buffer,
        default:""
    },
    category:{
        type:String,
        required:true
    },
    recommended:{
        type:Boolean
    },
    username:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model("Post",Post);