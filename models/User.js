const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
       name:{type:String, required:true},
       surname:{type:String, required:true},
       gsm:{type:String, required:true, unique:true},
       mail:{type:String, required:true, unique:true},
       password:{type:String, required:true},
       company:{type:String, default:null},
       taxnum:{type:String, default:null},
       isBusinness:{type:Boolean, default:false},
       sector:{type:String, default:null},
       category:{type:String, default:null},
       sectorCity:{type:Array},
       sectorDistinct:{type:Array},
       worksDays:{type:Array},
       worksHours:{type:Array}, 
       isAdmin:{type:Boolean, default:false},
       isActive:{type:Boolean, default:true},
       img:{type:String, default:''},
       adress:{type:Array},
       comments:{type:Array},
       rating:{type:Number, default:0},
       ratingCount:{type:Number, default:0},
       about:{type:String, default:null},
       referances:{type:Array},
    },{timestamps: true}
);


module.exports = mongoose.model("User", UserSchema);