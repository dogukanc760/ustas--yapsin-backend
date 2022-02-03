const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Service = require("../models/Service");

//get all service
router.get("/", async (req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get by user
router.get("/get-by-user/:userid", async (req, res) => {
  try {
    const service = await Service.find({ user: { $in: req.params.userid } });
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get by company
router.get("/get-by-company/:companyName", async (req, res) => {
  try {
    const service = await Service.find({
      companyName: { $in: req.params.companyName },
    });
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get service by demand of user
router.get("/get-by-demand/:sector/:category/:city/:distinct", async (req, res) => {
  try {
    const service = await Service.find({
      sector: { $in: req.params.sector },
      category: { $in: req.params.category },
       city:{$in:req.params.city},
      
    });
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//get by sector
router.get("/get-by-sector", async (req, res) => {
  try {
    const service = await Service.find({
      sector: { $all: [req.body.sector] },
    });
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get by category
router.get("/get-by-category", async (req, res) => {
  try {
    console.log(req.body.category);
    const service = await Service.find({
      category: { $all: [req.body.category] },
    });
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});


router.get("/get-by-cat/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const service = await Service.find({
      category: { $all: [req.params.id] },
    });
    
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//get by city
router.get("/get-by-city", async (req, res) => {
  try {
    const service = await Service.find({
      city: { $all: [req.body.city] },
    });
    res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//add new service
router.post("/", async (req, res) => {
  try {
    const newService = new Service({
      user: req.body.user,
      name: req.body.name,
      companyName: req.body.companyName,
      sector: [req.body.sector],
      category: [req.body.category],
      city: [req.body.city],
      distinct: [req.body.distinct],
      questions: [req.body.questions],
      answer: [req.body.answer],
      title: req.body.title,
      description: req.body.description,
      img: req.body.img,
      rating: req.body.rating,
      ratingCount: req.body.ratingCount,
      comments: req.body.comments,
      about: req.body.about,
      isActive: req.body.isActive,
      showHome: req.body.showHome,
      descImg:req.body.descImg,
      descVideos: req.body.descVideos,
      price:req.body.price,
      priceTwo: req.body.priceTwo,
      personCount: req.body.personCount,
    });

    const savedService = newService.save();
    res
      .status(201)
      .json({ data: newService, status: 201, message: "Success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//update service
router.put('/:id', async (req, res) => {
  try {
      const service = await Service.findByIdAndUpdate(
          req.params.id,
          {
              $set:req.body,
          },
          {new:true}
      );
      res.status(200).json({ data: service, status: 200, message: "Success" });
  } catch (error) {
      res.status(500).json({message: error});
  }
});

//delete service
router.delete("/:id", async(req, res)=>{
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({ data: service, status: 200, message: "Success" });
    } catch (error) {
        res.status(500).json({message: error});
    }
})


module.exports = router;