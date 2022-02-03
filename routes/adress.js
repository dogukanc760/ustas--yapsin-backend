const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Adress = require("../models/Adress");


//get adress
router.get("/", async (req, res) => {
  try {
    const adress = await Adress.find();
    res.status(200).json({ data: adress, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//get adress by id
router.get("/:id", async (req, res) => {
  try {
    const adress = await Adress.findById(req.params.id);
    res.status(200).json({ data: adress, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//update adress
router.put("/:id", async (req, res) => {
  try {
    const adress = await Adress.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ data: adress, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//add new adress
router.post("/", async (req, res) => {
  try {
    const newAdress = new Adress({
      adress: req.body.adress,
      user:req.body.user,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
    });
    const savedAdress = newAdress.save();
    res
      .status(201)
      .json({ data: savedAdress, status: 201, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//delete adress
router.delete("/:id", async (req, res) => {
  try {
      const deletedAdress = await Adress.findByIdAndDelete(req.params.id);
      res.status(200).json({ data: deletedAdress, status: 200, message: "Success" })
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

module.exports = router;
