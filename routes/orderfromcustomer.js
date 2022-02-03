const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndadmin,
  } = require("./verifytoken");
  
  const OrderFromCustomer = require("../models/OrderFromCustomer");

  //get orderfromcustomer
  router.get("/",async,(req,res)=>{
      try{
          const orderfromcustomer = await OrderFromCustomer.find();
          res.status(200).json({data:orderfromcustomer,status:200,message:"Success"})
      }catch(error){
          res.status(500).json({data:error,status:500})
      }
  })

  //get orderfromcustomer by id
  router.get("/:id",async,(req,res)=>{
      try{
          const orderfromcustomer = await OrderFromCustomer.findById(req.params.id);
          res.status(200).json({data:orderfromcustomer,status:200,message:"Success"})
      }catch(error){
          res.status(500).json({data:error,status:500})
      }
  })

  //get orderfromcustomer by sector
  router.get("/get-by-sector/:id", async (req, res) => {
    try {
        const orderfromcustomer = await OrderFromCustomer.find({sector:{$all:[req.params.id]}})
        res.status(200).json({data: orderfromcustomer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //get orderfromcustomer by category
 router.get("/get-by-category/:id", async (req, res) => {
    try {
        const orderfromcustomer = await OrderFromCustomer.find({category:{$all:[req.params.id]}})
        res.status(200).json({data: orderfromcustomer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //get orderfromcustomer by questionmain
 router.get("/get-by-questionmain/:id", async (req, res) => {
    try {
        const orderfromcustomer = await OrderFromCustomer.find({questionmain:{$all:[req.params.id]}})
        res.status(200).json({data: orderfromcustomer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //get orderfromcustomer by serviceSector
 router.get("/get-by-servicesector/:id", async (req, res) => {
    try {
        const orderfromcustomer = await OrderFromCustomer.find({servicesector:{$all:[req.params.id]}})
        res.status(200).json({data: orderfromcustomer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //get orderfromcustomer by cities
 router.get("/get-by-cities/:id", async (req, res) => {
    try {
        const orderfromcustomer = await OrderFromCustomer.find({cities:{$all:[req.params.id]}})
        res.status(200).json({data: orderfromcustomer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //get orderfromcustomer by counties
 router.get("/get-by-counties/:id", async (req, res) => {
    try {
        const orderfromcustomer = await OrderFromCustomer.find({counties:{$all:[req.params.id]}})
        res.status(200).json({data: orderfromcustomer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //update orderfromcustomer
 router.put("/:id",async,(req,res)=>{
try{
    const orderfromcustomer = await OrderFromCustomer.findByIdAndUpdate(req.params.id,
        {
          $set: req.body,
        },
        { new: true });
        res.status(200).json({data:orderfromcustomer,status:200,message:"Success"})
}catch(error){
    res.status(500).json({data:error,status:500})
}
 })

 //delete orderfromcustomer
 router.delete("/:id",async,(req,res)=>{
     try{
         const orderfromcustomer = await OrderFromCustomer.findByIdAndDelete(req.params.id);
         res.status(200).json({data:orderfromcustomer,status:200,message:"Success"})
     }catch(error){
         res.status(500).json({data:error,status:500})
     }
 })
 module.exports=router;