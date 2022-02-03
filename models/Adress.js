const mongoose = require('mongoose');

const  AdressSchema = new mongoose.Schema({
   adress:{type:String, required:true},
   user:{type:String, required:true},
   isActive:{type:Boolean, default:true},
   showHome:{type:Boolean, default:true}
},{timestamps:true});


module.exports = mongoose.model(" Adress",  AdressSchema);