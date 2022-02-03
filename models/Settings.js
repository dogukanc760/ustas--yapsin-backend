const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema(
    {
       mail1:{type:String, required:true},
       mail2:{type:String, required:true},
       gsm:{type:String, required:true},
       aboutUs:{type:String, required:true},
       fax:{type:String, required:true},
       telephone:{type:String,  required:true},
       facebook:{type:String,  required:true},
       instagram:{type:Boolean,  required:true},
       twitter:{type:String,  required:true},   
    },{timestamps: true}
);


module.exports = mongoose.model("Settings", SettingsSchema);