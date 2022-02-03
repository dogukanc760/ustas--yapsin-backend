const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Slider = require("../models/Slider");


//get slider
router.get("/", async (req, res) => {
  try {
    const slider = await Slider.find();
    res.status(200).json({ data: slider, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//get slider by id
router.get("/:id", async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    res.status(200).json({ data: slider, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//update slider
router.put("/:id", async (req, res) => {
  try {
    const slider = await Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ data: slider, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//add new slider
router.post("/", async (req, res) => {
  try {
    const newSlider = new Slider({
      sliderUrl: req.body.sliderUrl,
      sliderOrder:req.body.sliderOrder,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
    });
    const savedSlider = newSlider.save();
    res
      .status(201)
      .json({ data: savedSlider, status: 201, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//delete slider
router.delete("/:id", async (req, res) => {
  try {
      const deletedSlider = await Slider.findByIdAndDelete(req.params.id);
      res.status(200).json({ data: deletedSlider, status: 200, message: "Success" })
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

module.exports = router;
