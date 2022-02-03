const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:Array},
    isActive:{type:Boolean, default:false}, 
    showHome:{type:Boolean, default:false}, 
},{timestamps: true}
);

module.exports = mongoose.model("Sector", SectorSchema);