import mongoose from "mongoose";



const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualifications: {
        ring,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Typeof.ObjectId,
            ref: "Hospital",
            required: true
        }
    ]
}, { timestamps: true });


export const Doctor = mongoose.model("Doctor", doctorSchema);