const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Cities = require("../models/Cities");
const Cities = require("../models/Cities");

//get cities
router.get("/", async (req, res) => {
  try {
    const cities = await Cities.find();
    res.status(200).json({ data: cities, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//get cities by id
router.get("/:id", async (req, res) => {
  try {
    const cities = await Cities.findById(req.params.id);
    res.status(200).json({ data: cities, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//update cities
router.put("/:id", async (req, res) => {
  try {
    const cities = await Cities.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ data: cities, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//add new cities
router.post("/", async (req, res) => {
  try {
    const newCities = new Cities({
      name: req.body.name,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
    });
    const savedCities = newCities.save();
    res
      .status(201)
      .json({ data: savedCities, status: 201, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//delete cities
router.delete("/:id", async (req, res) => {
  try {
      const deletedCities = await Cities.findByIdAndDelete(req.params.id);
      res.status(200).json({ data: deletedCities, status: 200, message: "Success" })
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

module.exports = router;
