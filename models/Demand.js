const mongoose = require('mongoose');

const DemandSchema = new mongoose.Schema({
    company:{type:Array},//hizmet veren user id
    user:{type:String, required:true},//hizmet alan userid
    service:{type:Array},
    location:{type:Array},
    time:{type:String, required:true},
    date:{type:String, required:true},
    question:{type:Array},
    answer:{type:Array},
    status:{type:String, required:true},
    isActive:{type:Boolean, default:false},
    price:{type:String},
    offerPrice:{type:String, default:0},
    offerDescription:{type:String, default:null},
},{timestamps:true})



module.exports = mongoose.model("Demand", DemandSchema);