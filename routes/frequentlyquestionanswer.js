const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndadmin,
  } = require("./verifytoken");

const FrequentlyQuestionAnswer = require("../models/FrequentlyQuestionAnswer");

//get frequentlyquestionanswer
router.get("/",async,(req,res)=>{
    try{
        const frequentlyquestionanswer = await FrequentlyQuestionAnswer.find();
        res.status(200).json({data:frequentlyquestionanswer,status:200,message:"Success"})
    }catch(error){
      res.status(500).json({data:error,status:500})
    }
});

//get frequentlyquestionanswer by id
router.get("/:id",async(req,res)=>{
    try{
        const frequentlyquestionanswer = await FrequentlyQuestionAnswer.findById(req.params.id);
        res.status(200).json({data:frequentlyquestionanswer,status:200,message:"Success"})
    }catch(error){
        res.status(500).json({data:error,status:500})
    }
})

//get frequentlyquestionanswer by category
router.get("/get-by-category/:id",async(req,res)=>{
    try{
        const frequentlyquestionanswer = await FrequentlyQuestionAnswer.find({category:{$all:[req.params.id]}})
        res.status(200).json({data:frequentlyquestionanswer,status:200,message:"Success"})
    }catch(error){
        req.status(500).json({data:error,status:500})
    }
        
    
})

// update frequentlyquestionanswer
router.put("/:id",async(req,res)=>{
    try{
        const frequentlyquestionanswer = await FrequentlyQuestionAnswer.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new : true});  
        res.status(200).json({data:frequentlyquestionanswer,status:200,message:"Success"})    
    }catch(error){
        res.status(500).json({data:error,status:500})
    }
})

//delete frequentlyquestionanswer
router.delete("/:id",async(req,res)=>{
    try{
        const frequentlyquestionanswer = await FrequentlyQuestionAnswer.findOneAndDelete(req.params.id);
        res.status(200).json({data:frequentlyquestionanswer,status:200,message:"Success"})
    }catch(error){
        res.status(500).json({data:error,status:500})
    }
})


// new frequentlyquestionanswer
router.post("/",async(req,res) =>
{
    try
    {
        const newFrequentlyQuestionAnswer = new FrequentlyQuestionAnswer(
        {
           frequentlyQuestion:req.body.frequentlyQuestion,
           frequentlyAnswer:req.body.frequentlyAnswer,
           category:req.body.category,
           isActive: req.body.isActive,
           showHome: req.body.showHome,
        });
        const savedQuestionMain = await newQuestionMain.save();
        res.status(201).json({data: savedQuestionMain, status: 201, message: "Success"})
    }catch(error)
    {
        res.status(500).json({status: 500, message: error})
    }
});
module.exports=router;