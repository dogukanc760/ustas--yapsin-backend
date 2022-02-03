const router = require("express").Router();
const 
{verifyToken,
 verifyTokenAndAuthorization,
 verifyTokenAndadmin,

} = require("./verifytoken");
const AnswerForOrderQuestion = require("../models/AnswerForOrderQuestion");
const { model } = require("mongoose");


//get answerfororderquestion 
router.get("/",async(req,res) => 
{
try
{
const AnswerForOrderQuestion = await AnswerForOrderQuestion.find();
res.status(200).json({data:AnswerForOrderQuestion,status:200,messsage:"success"}) 
}catch(error)
{
res.status(500).json({message:error,status:500})
}
});

//get answerfororderquestion by id
router.get("/:id",async(req,res)=>{
    try {
        const AnswerForOrderQuestion = await AnswerForOrderQuestion.findbyId(req.params.id);
        res.status(200).json({data:AnswerForOrderQuestion,status:200,message:"Success"})
    }catch(error){
        res.status(500).json({message:error,status:500})
    }
}
);

//answerfororderquestion by questionanswer
router.get("/get-by-questionanswer/:id", async (req, res) => {
    try {
        const answerfororderquestion = await AnswerForOrderQuestion.find({questionanswer:{$all:[req.params.id]}})
        res.status(200).json({data: answerfororderquestion, status: 200, message: "Success"})
    } catch (error) {
        res.status(500).json({message: error, status:500});
    }
 })

 //update answerfororderquestion
 router.put("/:id",async,(req,res)=>{
     try{
         const AnswerForOrderQuestion = await AnswerForOrderQuestion.findbyIdAndUpdate( req.params.id,
            {
                $set:req.body,
            },{new:true});
         res.status(200).json({data:AnswerForOrderQuestion,status:200,message:"Success"})
     }catch(error){
         res.status(500).json({data:error,status:500})
     }
 })

 //delete answerfororderquestion
 router.delete("/:id",async,(req,res)=>{
try{
    const AnswerForOrderQuestion = await AnswerForOrderQuestion.findbyIdAndDelete(req.params.id);
    res.status(200).json({data:AnswerForOrderQuestion,status:200,message:"Success"})
}catch(error){
    res.status(500).json({data:error,status:500})
}
 }
 )

  //new ansferfororderquestion
  router.post("/", async (req, res)=>{
    try {
        const newServiceSector = new ServiceSector({
            user: req.body.user,
            questionmain: req.body.questionmain,
            answercontent: req.body.answerContent,
            createdAt:req.body.createdAt,
            isActive: req.body.isActive,
            showHome: req.body.showHome,
        });
        const savedServiceSector = await newServiceSector.save();
        res.status(201).json({data: savedServiceSector, status: 201, message: "Success"})
    } catch (error) {
      res.status(500).json({status: 500, message: error})
    }
  });

  module.exports=router;