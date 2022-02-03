const mongoose = require('mongoose');

const AnswerForOrderQuestionSchema = new mongoose.Schema({
    user:{type:Array},
    questionanswer:{type:Array},
    answerContent:{type:String,require:true},
    createdAt:{type:Date,require:true},
    isActive:{type:Boolean, default:false}, 
    showHome:{type:Boolean, default:false}, 
},{timestamps:true}
);

module.exports = mongoose.model("AnswerForOrderQuestion",AnswerForOrderQuestionSchema);