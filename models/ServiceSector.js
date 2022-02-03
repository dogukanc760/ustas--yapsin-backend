const mongoose = require('mongoose');


const ServiceSectorSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        img:{type:String, required:true},
        sector:{type:Array},
        isActive:{type:Boolean, default:true},
        showHome:{type:Boolean, default:true}
    },{timestamps:true}
    )

module.exports = mongoose.model("ServiceSector", ServiceSectorSchema);