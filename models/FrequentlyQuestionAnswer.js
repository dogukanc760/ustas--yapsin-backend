const mongoose = require('mongoose');

const FrequentlyQuestionAnswerSchema = mongoose.Schema({
    frequentlyQuestion:{type:String},
    frequentlyAnswer:{type:String},
    category:{type:Array},isActive:{type:Boolean, default:false}, 
    showHome:{type:Boolean, default:false}, 
},{timestamps:true}
);

module.exports = mongoose.model("FrequentlyQuestionAnswer",FrequentlyQuestionAnswerSchema);
