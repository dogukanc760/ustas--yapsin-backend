const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const QuestionMain = require("../models/QuestionMain");

//get questionmain
router.get("/", async (req, res) => {
  try {
    const QuestionMain = await QuestionMain.find();
    res
      .status(200)
      .json({ data: QuestionMain, status: 200, messsage: "success" });
  } catch (error) {
    res.status(500).json({ message: error, status: 500 });
  }
});

//get questionmain by id
router.get("/:id", async (req, res) => {
  try {
    const QuestionMain = await QuestionMain.findById(req.params.id);
    res
      .status(200)
      .json({ data: QuestionMain, status: 200, messsage: "success" });
  } catch (error) {
    res.status(500).json({ message: error, status: 500 });
  }
});

//delete questionmain
router.delete("/:id", async (req, res) => {
  try {
    const QuestionMain = await QuestionMain.findByIdDelete(req.params.id);
    res
      .status(200)
      .json({ data: QuestionMain, status: 200, messsage: "success" });
  } catch (error) {
    res.status(500).json({ message: error, status: 500 });
  }
});

//uptade questionmain
router.put("/:id", async (req, res) => {
  try {
    const QuestionMain = await QuestionMain.findByIdUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ data: QuestionMain, status: 200, messsage: "success" });
  } catch (error) {
    res.status(500).json({ message: error, status: 500 });
  }
});

// new questionmain
router.post("/", async (req, res) => {
  try {
    const newQuestionMain = new QuestionMain({
      name: req.body.name,
      servicesector: req.body.servicesector,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
    });
    const savedQuestionMain = await newQuestionMain.save();
    res
      .status(201)
      .json({ data: savedQuestionMain, status: 201, message: "Success" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
  }
});
module.exports = router;
