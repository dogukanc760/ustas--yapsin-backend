const router =require("express").Router();
const { required } = require("nodemon/lib/config");
const
{
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndadmin,

}= require("./verifytoken");
const QuestionAnswer = require("../models/QuestionAnswer");
const res = require("express/lib/response");
const { model } = require("mongoose");

// get questionanswer
router.get("/", async (req, res) => 
{
    try 
    {
        const QuestionAnswer = await QuestionAnswer.find();
        res.status(200).json({data: QuestionAnswer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500})
    }
    });

// get questionanswer by id
router.get("/:id",async(req,res)=>
{
try
{
    const QuestionAnswer = await QuestionAnswer.findById(req.params.id);
    res.status(200).json({data:QuestionAnswer,status:200,message:"success"})
}catch(error)
{
    res.status(500).json({message:error,status:500})
}
});

// get questionanswer by questionmain
router.get("/get-by-questionmain/:id", async (req, res) => 
{
    try
     {
        const QuestionAnswer = await QuestionAnswer.find({questionmain:{$all:[req.params.id]}})
        res.status(200).json({data: QuestionAnswer, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 });

 // update questionanswer
 router.put(":/id",async(req,res)=>
 {
     try
     {
      const QuestionAnswer = await QuestionAnswer.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({data:QuestionAnswer,status:200,message:"Success"})
     }catch(error)
     {
         res.status(500).json({data:error,status:500})
     }
 }
 );
 //delete questionanswer
 router.delete("/:id",async(req,res)=>
 {
     try
     {
         const QuestionAnswer = await QuestionAnswer.findByIdAndDelete(req.params.id);
         res.status(200).json({data:QuestionAnswer,status:200,message:"Succes"})
     }catch(error)
     {
         res.status(500).json({data:error,status:500})
     }
 });

 //add new questionanswer
router.post("/", async (req, res) => 
{
    try
     {
      const newQuestionMain = new QuestionAnswer({
        question: req.body.question,
        questionmain: req.body.questionmain,
        createdAt:req.body.createdAt,
        isActive: req.body.isActive,
        showHome: req.body.showHome,
      });
      const savedCategory = newCategory.save();
      res
        .status(201)
        .json({ data: savedCategory, status: 201, message: "Success" });
    } catch (error) {
      res.status(error.status).json({ message: error });
    }
  });
module.exports=router;