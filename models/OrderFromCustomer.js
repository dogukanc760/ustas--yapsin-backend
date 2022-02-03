const mongoose = require('mongoose');
//PhotoRefId kontrol et
const OrderFromCustomer = mongoose.Schema({
    ordercreatorid:{type:String,require:true},
    serviceuserid:{type:String,require:true},
    isActive:{type:Boolean,require:true},
    ishurry:{type:Boolean,require:true},
    iswhen:{type:Date,require:true},
    iscompleted:{type:Boolean,require:true},
    istrue:{type:Boolean,require:true},
    createdAt:{type:Date},
    updatedAt:{type:Date},
    comemyadress:{type:Boolean,require:true},
    adresslocate:{type:String,require:true},
    sector:{type:String,require:true},
    servicesector:{type:Array,require:true},
    cities:{type:Array,require:true},
    counties:{type:Array,require:true},
    quastionmain:{type:Array,require:true},
    category:{type:Array,require:true},
    isActive:{type:Boolean, default:false}, 
    showHome:{type:Boolean, default:false}, 
},{timestamps:true}
);

module.exports = mongoose.model("OrderFromCustomer",OrderFromCustomerSchema);