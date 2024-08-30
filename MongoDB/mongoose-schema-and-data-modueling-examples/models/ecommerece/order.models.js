import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity : {
        type:number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    orderprice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","completed","cancelled"], // enummration -> means choices
        default:"pending"
    }
},{timestamps:true})


export const Order = mongoose.modal("Order",orderSchema)