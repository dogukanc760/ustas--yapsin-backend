const mongoose =require('mongoose');


const QuestionAnswerSchema = new mongoose.Schema(
    {
        question:{tpye:String , require:true},
        questionmain:{tpye:Array},
        createdAt:{type:Date,require:true},
        isActive:{type:Boolean, default:false}, 
        showHome:{type:Boolean, default:false}, 

    },{timestamps: true}
);