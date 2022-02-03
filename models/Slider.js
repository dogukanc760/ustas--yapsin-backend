const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
   sliderUrl:{type:String, required:true},
   sliderOrder:{type:String, required:true},
   isActive:{type:Boolean, default:true},
   showHome:{type:Boolean, default:true}
},{timestamps:true});


module.exports = mongoose.model("Slider", SliderSchema);