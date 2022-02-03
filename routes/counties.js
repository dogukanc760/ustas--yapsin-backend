const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Counties = require("../models/Counties");
const Counties = require("../models/Counties");

//get counties
router.get("/", async (req, res) => {
  try {
    const counties = await Counties.find();
    res.status(200).json({ data: counties, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

  //get Counties by Cities id
  router.get("/get-by-cities/:id", async (req, res) => {
    try {
        const Counties = await Counties.find({cities:{$all:[req.params.id]}})
        res.status(200).json({data: Counties, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })


//get counties by id
router.get("/:id", async (req, res) => {
  try {
    const counties = await Counties.findById(req.params.id);
    res.status(200).json({ data: counties, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//update counties
router.put("/:id", async (req, res) => {
  try {
    const counties = await Counties.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ data: counties, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//add new counties
router.post("/", async (req, res) => {
  try {
    const newCounties = new Counties({
      name: req.body.name,
      cities:req.body.cities,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
    });
    const savedCounties = newCounties.save();
    res
      .status(201)
      .json({ data: savedCounties, status: 201, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//delete counties
router.delete("/:id", async (req, res) => {
  try {
      const deletedCounties = await Counties.findByIdAndDelete(req.params.id);
      res.status(200).json({ data: deletedCounties, status: 200, message: "Success" })
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

module.exports = router;
