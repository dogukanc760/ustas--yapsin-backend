const mongoose = require('mongoose');

const QuestionMainSchema = new mongoose.Schema({
    name:{type:String , required:false},
    serviceSector:{type:Array},
    isActive:{type:Boolean, default:false}, 
    showHome:{type:Boolean, default:false}, 
    },{timestamps: true}
);