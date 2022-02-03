const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
    {
       user:{type:String, required:true},//bu hizmeti sağlayan userin id si
       name:{type:String, required:true},
       companyName:{type:String, required:true},
       sector:{type:Array, required:true},
       category:{type:Array},
       city:{type:Array},
       distinct:{type:Array},
       questions:{type:Array},
       answer:{type:Array},
       title:{type:String, required:true},
       description:{type:String, required:true},
       price:{type:Number, required:true},
       priceTwo:{type:Number, required:true},
       personCount:{type:String, required:true},
       img:{type:String, required:true},
       descImg:{type:Array},
       descVideos:{type:Array},
       rating:{type:Number, default:0},
       ratingCount:{type:Number, default:0},
       comments:{type:Array},
       about:{type:String, required:true},
       isActive:{type:Boolean, default:true},
       showHome:{type:Boolean, default:true},
       status:{type:Boolean, default:false},
    },{timestamps:true});

module.exports = mongoose.model("Service", ServiceSchema);