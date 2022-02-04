const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    mail: req.body.mail,
    gsm: req.body.gsm,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res
      .status(201)
      .json({
        success: true,
        data: savedUser,
        message: "Register Successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.post("/register-business", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    gsm: req.body.gsm,
    mail: req.body.mail,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
    company: req.body.company,
    taxnum: req.body.taxnum,
    isBusinness: true,
    sector: req.body.sector,
    category: req.body.category,
    sectorCity: req.body.sectorCity,
    sectorDistinct: req.body.sectorDistinct,
    worksDays: req.body.worksDays,
    worksHours: req.body.worksHours,
  });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    res
      .status(201)
      .json({
        success: true,
        data: savedUser,
        message: "Register Successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = "";
    if (req.body.mail) {
      console.log(req.body.mail);
      user = await User.findOne({
        mail: req.body.mail,
      });
    } else if (req.body.gsm) {
      user = await User.findOne({
        gsm: req.body.gsm,
      });
    }
    console.log(user);
    console.log(req.body.mail);
    // if(!user){
    //   res.status(401).json("Wrong Mail Or Gsm");
    // }
   // !user && res.status(401).json("Wrong Mail Or Gsm");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    if (hashedPassword.toString(CryptoJS.enc.Utf8) == null) {
      console.log("hash null");
    }
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (Originalpassword !== req.body.password) {
      res.status(401).json("Wrong Password");
    } else {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
          isBusinness: user.isBusinness,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      const { password, ...others } = user._doc;

      res
        .status(200)
        .json({
          data: { ...others, accessToken },
          success: true,
          message: "Login Successfully",
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

module.exports = router;
