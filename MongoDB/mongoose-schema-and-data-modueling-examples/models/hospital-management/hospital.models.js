import mongoose from "mongoose";


const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    sepializedIn:{
        type:String
    }
}, { timestamps: true })


export const Hospital = mongoose.modal("Hospital", hospitalSchema)