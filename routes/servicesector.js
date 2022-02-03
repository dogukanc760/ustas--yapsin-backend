const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndadmin,
  } = require("./verifytoken");
const ServiceSector = require("../models/ServiceSector");

//get ServiceSector
router.get("/", async (req, res) => {
    try {
        const ServiceSector = await ServiceSector.find();
        res.status(200).json({data: ServiceSector, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500})
    }
    });
    
    
    //get ServiceSector by category 
    router.get("/get-by-category/:id", async (req, res) => {
       try {
           const ServiceSector = await ServiceSector.find({category:{$all:[req.params.id]}})
           res.status(200).json({data: ServiceSector, status: 200, message: "Success"})
       } catch (error) {
           res.status(500).json({message: error, status:500});
       }
    })
    
    //get ServiceSector by id
    router.get("/:id", async (req, res)=>{
        try {
            const ServiceSector = await ServiceSector.findById(req.params.id);
            res.status(200).json({data: ServiceSector, status: 200, message: "Success"})
        } catch (error) {
            res.status(500).json({message: error, status:500});
        }
    })
    
    //delete ServiceSector
    router.delete("/:id",  async (req, res)=>{
        try {
            const deletedServiceSector =  await ServiceSector.findByIdAndDelete(req.params.id);
            res.status(200).json({ data: deletedServiceSector, status: 200, message: "Success" })
        } catch (error) {
            res.status(500).json({message: error});
        }
    })
    
    //update ServiceSector
    router.put("/:id",  async (req, res)=>{
        try {
            const updatedServiceSector = await ServiceSector.findByIdAndUpdate(
                req.params.id,
                {
                    $set:req.body,
                },{new:true}
            );
            res.status(200).json({data: updatedServiceSector, status: 200, message: "Success"})
        } catch (error) {
            res.status(500).json({status: 500, message: error})
        }
    })
    
    //new ServiceSector
    router.post("/", async (req, res)=>{
      try {
          const newServiceSector = new ServiceSector({
              name: req.body.name,
              sector: req.body.sector,
              img: req.body.img,
              isActive: req.body.isActive,
              showHome: req.body.showHome,
          });
          const savedServiceSector = await newServiceSector.save();
          res.status(201).json({data: savedServiceSector, status: 201, message: "Success"})
      } catch (error) {
        res.status(500).json({status: 500, message: error})
      }
    });


module.exports = router;