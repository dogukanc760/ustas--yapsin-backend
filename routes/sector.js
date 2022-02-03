const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndadmin,
  } = require("./verifytoken");
const Sector = require("../models/Sector");


//get sector
router.get("/", async (req, res) => {
try {
    const sector = await Sector.find();
    res.status(200).json({data: sector, status: 200, message: "Success"})
} catch (error) {
    res.status(500).json({message: error, status:500})
}
});


//get sector by category 
router.get("/get-by-category/:id", async (req, res) => {
   try {
       const sector = await Sector.find({category:{$all:[req.params.id]}})
       res.status(200).json({data: sector, status: 200, message: "Success"})
   } catch (error) {
       res.status(500).json({message: error, status:500});
   }
})

//get sector by id
router.get("/:id", async (req, res)=>{
    try {
        const sector = await Sector.findById(req.params.id);
        res.status(200).json({data: sector, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
})

//delete sector
router.delete("/:id",  async (req, res)=>{
    try {
        const deletedSector =  await Sector.findByIdAndDelete(req.params.id);
        res.status(200).json({ data: deletedSector, status: 200, message: "Success" })
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//update sector
router.put("/:id",  async (req, res)=>{
    try {
        const updatedSector = await Sector.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },{new:true}
        );
        res.status(200).json({data: updatedSector, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({status: 500, message: error})
    }
})

//new sector
router.post("/", async (req, res)=>{
  try {
      const newSector = new Sector({
          name: req.body.name,
          img:req.body.img,
          category: req.body.category,
          isActive: req.body.isActive,
          showHome: req.body.showHome,
      });
      const savedSector = await newSector.save();
      res.status(201).json({data: savedSector, status: 201, message: "Success"})
  } catch (error) {
    res.status(500).json({status: 500, message: error})
  }
});

module.exports = router;