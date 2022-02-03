const router = require("express").Router();
const CryptoJS = require("crypto-js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const User = require("../models/User");


//get user by name
router.get("/find-by-name/:name", async (req, res) => {
    try {
        const user = await User.find({name:{$regex:req.params.name}})
        res.status(200).json({data:user, status:200})
    } catch (error) {
        res.status(500).json({message:error, status:500})
    }
})

//get user by gsm
router.get("/find-by-gsm/:gsm", async (req, res) => {
    try {
        const user = await User.find({gsm:{$regex:req.params.gsm}})
        res.status(200).json({data:user, status:200})
    } catch (error) {
        res.status(500).json({message:error, status:500})
    }
})

//get user by category
router.get("/find-by-category/:category", async (req, res)=>{
    try {
        const user = await User.find({category:{$in:req.params.gsm}})
        res.status(200).json({data:user, status:200})
    } catch (error) {
        res.status(500).json({message:error, status:500})
    }
})

//get business user 
router.get("/get-business", async (req, res)=>{
  try {
      const user = await User.find({isBusinness:{$in:true}})
      res.status(200).json({data:user, status:200})
  } catch (error) {
      res.status(500).json({message:error, status:500})
  }
})

//get user by id
router.get("/find/:id",  async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//user update
router.put("/:id",  async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECRET
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json(updatedUser);
    } catch (error) {
      res.status(403).json(error);
    }
  });

//user delete

router.delete("/:id",  async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  });

//get all users
router.get("/",  async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
  
      res.status(200).json({data:users, success: true, message:"Successfully", status:200});
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

//get user stats

router.get("/stats",  async (req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte:lastYear}}},
            {
                $project:{
                    month:{$mont: "$createdAt"},
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;