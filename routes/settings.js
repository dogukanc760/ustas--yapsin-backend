const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Settings = require("../models/Settings");
const Settings = require("../models/Settings");

//get settings
router.get("/", async (req, res) => {
  try {
    const settings = await Settings.find();
    res.status(200).json({ data: settings, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//get settings by id
router.get("/:id", async (req, res) => {
  try {
    const settings = await Settings.findById(req.params.id);
    res.status(200).json({ data: settings, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//update settings
router.put("/:id", async (req, res) => {
  try {
    const settings = await Settings.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ data: settings, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//add new settings
router.post("/", async (req, res) => {
  try {
    const newSettings = new Settings({
      mail1: req.body.mail1,
      mail2: req.body.mail2,
      gsm:req.body.gsm,
      aboutsUs:req.body.aboutsUs,
      fax:req.body.fax,
      telephone:req.body.telephone,
      facebook:req.body.facebook,
      instagram:req.body.instagram,
      twitter:req.body.twitter,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
    });
    const savedSettings = newSettings.save();
    res
      .status(201)
      .json({ data: savedSettings, status: 201, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//delete settings
router.delete("/:id", async (req, res) => {
  try {
      const deletedSettings = await Settings.findByIdAndDelete(req.params.id);
      res.status(200).json({ data: deletedSettings, status: 200, message: "Success" })
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

module.exports = router;
