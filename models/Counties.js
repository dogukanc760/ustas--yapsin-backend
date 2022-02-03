const mongoose = require('mongoose');

const  CountiesSchema = new mongoose.Schema({
   name:{type:String, required:true},
   cities:{type:Array},
   isActive:{type:Boolean, default:true},
   showHome:{type:Boolean, default:true}
},{timestamps:true});


module.exports = mongoose.model(" Counties",  CountiesSchema);