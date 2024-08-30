import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        diagnoseWith:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        bloodGroup:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            enu:["male","female","Other"], // choices and default is must 
            required:true
        },
        admittedIn:{
            type:mongoose.Schema.Typeof.ObjectId,
            ref:"Hospital",
            required:true
        }
    },{timestamps:true})


export const Patient = mongoose.modal("Patient",patientSchema)