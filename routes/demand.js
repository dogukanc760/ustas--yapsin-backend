const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Demand = require("../models/Demand");

//get demands 
router.get("/", async (req, res)=>{
  try {
      const demand = await Demand.find();
      res.status(200).json({data: demand, status: 200, message: "Success"})
  } catch (error) {
      res.status(500).json({message: error})
  }
});

//get demand by id
router.get("/:id", async (req, res)=>{
    try {
        const demand = await Demand.findById(req.params.id);
        res.status(200).json({data: demand, status: 200, message: "Success"});
    } catch (error) {
        res.status(500).json({message: error});
    }
});

//get demand by user
router.get("/get-by-user/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            user:{$all: [req.params.id]}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error})
    }
});

//get demand by user
router.get("/get-by-company/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            company:{$all: [req.params.id]}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error})
    }
});

//get demand by user active
router.get("/get-by-user/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            user:{$all: [req.params.id]},
            status:{$in:"Teklif Bekliyor"}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error})
    }
});

//get demand by user completed
router.get("/get-by-user/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            user:{$all: [req.params.id]},
            status:{$in:"Tamamlandı"}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error})
    }
});
//get demand by user cancel
router.get("/get-by-user/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            user:{$all: [req.params.id]},
            status:{$in:"İptal Edildi"}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error})
    }
});

//get demand by company
router.get("/get-by-company/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            company: {$all: [req.params.id]}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"});
    } catch (error) {
        res.status(500).json({message: error})
    }
})
//get demand by company and active
router.get("/get-by-company/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            company: {$all: [req.params.id]},
            status:{$in:"Teklif Bekliyor"}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"});
    } catch (error) {
        res.status(500).json({message: error})
    }
})
//get demand by company completed
router.get("/get-by-company/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            company: {$all: [req.params.id]},
            status:{$in:"Tamamlandı"}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"});
    } catch (error) {
        res.status(500).json({message: error})
    }
})
//get demand by company cancel
router.get("/get-by-company/:id", async (req, res)=>{
    try {
        const demand = await Demand.find({
            company: {$all: [req.params.id]},
            status:{$in:"İptal Edildi"}
        });
        res.status(200).json({data: demand, status: 200, message: "Success"});
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//create new demand from customer
router.post("/", async (req, res)=>{
    try {
        const newDemand = new Demand({
            company:req.body.company,
            user: req.body.user,
            service: [req.body.service],
            location: [req.body.location],
            time: req.body.time,
            date: req.body.date,
            question:[req.body.question],
            answer: [req.body.answer],
            status: req.body.status,
            isActive: true,
            price: "",
            offerPrice:0,
            offerDescription:0
        });
        const savedDemand = newDemand.save();
        res.status(201).json({data: newDemand, status: 201, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error});
    }
});

//update demand
router.put("/:id", async (req, res)=>{
    try {
        const demand = await Demand.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },{new: true}
        );
        res.status(200).json({data: demand, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//delete demand
router.delete("/:id", async (req, res)=>{
    try {
        const demand = await Demand.findByIdAndDelete(req.params.id);
        res.status(200).json({ data: demand, status: 200, message: "Success" })
    } catch (error) {
        res.status(500).json({message: error})
    }
});

//accept demand


module.exports = router;