const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
    {
       name:{type:String, required:true},
       category:{type:String},
       serviceSector:{type:Array},
       question: {type:String, required:true},
       type:{type:String, required:true},
       answer:{type:Array},
    },{timestamps:true});

module.exports = mongoose.model("Question", QuestionSchema);