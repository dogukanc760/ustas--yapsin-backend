const router = require('express').Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndadmin,
  } = require("./verifytoken");
const Question = require("../models/Question");


//get questions 
router.get("/", async (req, res)=>{
   try {
       const questions = await Question.find();
       res.status(200).json({ data: questions, status: 200, message: "Success" });
   } catch (error) {
       res.status(500).json({ message: error });
   }
});

// get question by service sector
router.get("/:servicesector", async (req, res)=>{
    try {
        const questions = await Question.find({servicesector: {$all:[req.params.servicesector]}});
        res.status(200).json({ data: questions, status: 200, message})
    } catch (error) {
        res.status(500).json({ message:error})
    }
});

// get question by service sector
router.get("/get-by-category/:id", async (req, res)=>{
    try {
        const questions = await Question.find({category: {$regex:req.params.id}});
        res.status(200).json({ data: questions, status: 200, message:"Success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message:error})
    }
});

// get question by id 
router.get("/:id", async(req, res)=>{
    try {
        const questions = await Question.findById(req.params.id);
        res.status(200).json({ data: questions, status: 200, message: "Success" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
});


//add new questions
router.post("/", async (req, res) =>{
    try {
        const newQuestion = new Question({
            name: req.body.name,
            serviceSector: req.body.serviceSector,
            question: req.body.question,
            type: req.body.type,
            answer: req.body.answer,
            category:req.body.category
        });
        const savedQuestion = newQuestion.save();
        res.status(201).json({ data: savedQuestion, status: 201, message: "Success"})
    } catch (error) {
        res.status(500).json({ message: error })
    }
});

//update question
router.put("/:id", async(req, res)=>{
    try {
        const questions = await Question.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },{new: true}
        );
        res.status(200).json({ data:questions, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({ message: error })
    }
});

//delete question
router.delete("/:id", async(req, res)=>{
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ data: deletedQuestion, status: 200, message: "Success" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = router;