import mongoose from "mongoose"

const catagorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})


export const Catagory = mongoose.modelNames("Category",catagorySchema)
