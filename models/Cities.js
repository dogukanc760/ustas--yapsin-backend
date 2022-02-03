const mongoose = require('mongoose');

const CitiesSchema = new mongoose.Schema({
   name:{type:String, required:true},
   isActive:{type:Boolean, default:true},
   showHome:{type:Boolean, default:true}
},{timestamps:true});


module.exports = mongoose.model("Cities", CitiesSchema);