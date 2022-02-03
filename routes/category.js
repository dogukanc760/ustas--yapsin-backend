const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndadmin,
} = require("./verifytoken");
const Category = require("../models/Category");

//get categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ data: categories, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//get category by id
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ data: category, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//update category
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ data: category, status: 200, message: "Success" });
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

//add new category
router.post("/", async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
      img: req.body.img,
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

//delete category
router.delete("/:id", async (req, res) => {
  try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id);
      res.status(200).json({ data: deletedCategory, status: 200, message: "Success" })
  } catch (error) {
    res.status(error.status).json({ message: error });
  }
});

module.exports = router;
