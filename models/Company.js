const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        author:{type:String, required:true},
        wallet:{type:Number, default:0},
        rating:{type:String, default:0},
        location:{type:String, required:true},
        phone:{type:String, required:true},
    },{timestamps:true});