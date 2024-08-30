import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
    customersList:{
        type:String,
        required:true
    },
    totalCost:{
        type:Number,
        required:true
    },
    totalProfit:{
        type:Number,
        required:true
    },
    totalPatients:{
        type:Number,
        required:true
    },
    totalDoctors:{
        type:Number,
        required:true
    }
},{timestamps:true})


export const MedicalRecord = mongoose.Model("Record",medicalRecordSchema)